import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService } from '../../theme/theme.service';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { UtilityService } from '../../services/utility.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

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
    private router: Router
  ) {}
  headerLogo = 'logoLight';

  ngOnInit(): void {
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
    this.themeService.setActiveThem(this.themeService.active_theme);
  }

  goBack() {
    this.router.navigate(['']);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (window.scrollY > 0) {
      this.verticalScrollValue = true;
    } else {
      this.verticalScrollValue = false;
    }
    console.log(this.verticalScrollValue);
  }
}
