import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeService } from './modules/shared/theme/theme.service';
import { CookieService } from './modules/shared/services/cookies.service';
import { UtilityService } from './modules/shared/services/utility.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  display = false;
  constructor(
    private themeService: ThemeService,
    private cookieService: CookieService,
    public utilityService: UtilityService,
    private router: Router
  ) {
    const theme = cookieService.getCookie('theme');
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    darkModeMediaQuery.addListener((e) => this.updateTheme(e.matches));
    if (!theme) {
      this.updateTheme(darkModeMediaQuery.matches);
    }
  }

  updateTheme(darkMode: boolean) {
    if (darkMode) {
      this.themeService.active_theme = 'dark_theme';
      this.themeService.setActiveThem('dark_theme');
    } else {
      this.themeService.active_theme = 'light_theme';
      this.themeService.setActiveThem('light_theme');
    }
  }

  ngOnInit(): void {
    AOS.init();

    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    })    
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}
}
