import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../theme/theme.service';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { UtilityService } from '../../services/utility.service';
import { environment } from 'src/environments/environment';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter } from 'rxjs';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { MatDialog } from '@angular/material/dialog';
import { ApplyDialogComponent } from '../apply-dialog/apply-dialog.component';
import { DataService } from '../../services/data.service';
import { CoursesNavBarOverlayComponent } from '../courses-nav-bar-overlay/courses-nav-bar-overlay.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  isLightTheme = true;
  active = false;
  verticalScrollValue: boolean = false;
  showExpert = true;
  constructor(
    public themeService: ThemeService,
    public utilityService: UtilityService,
    private router: Router,
    private $gaService: GoogleAnalyticsService,
    private dialog: MatDialog,
    private dataService: DataService
  ) {}
  headerLogo = 'logoLight';
  courseName = '';
  mindMapJson: any = {};

  ngOnInit(): void {
    this.router.events.subscribe(async(ev) => {
      if (ev instanceof NavigationStart) {
        this.showExpert = ev.url === '/';
      } else if (ev instanceof NavigationEnd) {
        if (ev.url === '/') {
          this.utilityService.showFooterSet = true;
        }

        const currentUrl = window.location.href;
        if (currentUrl.indexOf("course-details") != -1) {
          const parts = currentUrl.split('/');
          this.courseName = parts[parts.length - 1];
          await this.fetchMindMapData();
        }
      }
    });

    gsap.registerPlugin(ScrollToPlugin);

    this.themeService.getActiveTheme.subscribe((res: string) => {
      if (res === 'light_theme') {
        this.active = false;
      } else {
        this.active = true;
      }

      this.headerLogo = res === 'light_theme' ? 'logoLight' : 'logoDark';
    });

    this.isLightTheme = this.detectCurrentTheme();
  }

  async fetchMindMapData() {
    this.mindMapJson = await this.dataService
      .loadMindMapData(this.courseName)
      .toPromise();
  }

  scrollToTarget(target: string) {
    gsap.to(window, { duration: 2, scrollTo: { y: `#${target}` } });
  }

  switchTheme() {
    if (this.themeService.active_theme == 'light_theme') {
      this.themeService.active_theme = 'dark_theme';
    } else {
      this.themeService.active_theme = 'light_theme';
    }
    const currentTheme: any = this.themeService.active_theme;
    this.$gaService.event('click', 'Button', 'Theme Change', currentTheme);
    this.themeService.setActiveThem(this.themeService.active_theme);
    this.isLightTheme = !this.isLightTheme;
  }

  goBack() {
    this.$gaService.event('click', 'Logo Click', 'Back to homepage');
    this.router.navigate(['']);
    this.utilityService.showFooterSet = true;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (window.scrollY > 0) {
      this.verticalScrollValue = true;
    } else {
      this.verticalScrollValue = false;
    }
  }

  openDialog() {
    this.$gaService.event('click', 'Button', 'Open Apply dialog box', 1);
    this.dialog.open(ApplyDialogComponent, {
      width: 'clamp(20rem, 60vw, 35rem)',
    });
  }

  openCoursesDialog() {
    this.$gaService.event('click', 'Button', 'Open Apply dialog box', 1);
    this.dialog.open(CoursesNavBarOverlayComponent, {
      // width: 'clamp(20rem, 67vw, 64rem)',
      height: '29rem',
    });
  }

  courseDetailsPage(): boolean {
    return this.router.url.includes('/course-details');
  }

  downloadPdf() {
    this.$gaService.event(
      'click',
      'Button',
      'Download PDF',
      this.mindMapJson.additionalData.pdfName
    );
    const anchor = document.createElement('a');
    anchor.href = this.mindMapJson.additionalData.pdfUrl;
    anchor.download = this.mindMapJson.additionalData.pdfName;
    anchor.click();
  }

  openPayAfterPlacementPage() {
    this.router.navigate([`/pay-after-placement`]);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openPayAfterPlacementPageAndCloseMenu() {
    this.openPayAfterPlacementPage();
    this.isMenuOpen = false;
  }

  openCoursesDialogAndCloseMenu() {
    this.openCoursesDialog();
    this.isMenuOpen = false;
  }

  detectCurrentTheme(): boolean {
    return document.body.classList.contains('light-theme');
  }
}
