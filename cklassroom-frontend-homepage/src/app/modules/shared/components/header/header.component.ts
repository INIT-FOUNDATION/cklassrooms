import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../theme/theme.service';
import { CookieService } from '../../services/cookies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  active_theme = 'light_theme';
  constructor(
    private themeService: ThemeService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {}

  switchTheme() {
    if (this.active_theme == 'light_theme') {
      this.themeService.setActiveThem('dark_theme');
      this.active_theme = 'dark_theme';
    } else {
      this.themeService.setActiveThem('light_theme');
      this.active_theme = 'light_theme';
    }
    this.cookieService.deleteCookie('theme');
    this.cookieService.setCookie('theme', this.active_theme);
  }
}
