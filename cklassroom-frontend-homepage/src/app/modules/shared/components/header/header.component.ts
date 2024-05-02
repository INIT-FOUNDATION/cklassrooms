import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../theme/theme.service';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { UtilityService } from '../../services/utility.service';
import { environment } from 'src/environments/environment';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active = false;
  verticalScrollValue: boolean = false;
  constructor(
    public themeService: ThemeService,
    public utilityService: UtilityService,
    private router: Router,
    private $gaService: GoogleAnalyticsService
  ) {}
  headerLogo = 'logoLight';

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        if (event.url === '/') {
          this.utilityService.showFooterSet = true;
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
}
