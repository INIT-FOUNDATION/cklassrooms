import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ThemeService } from '../../theme/theme.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear = moment().year();
  headerLogo = 'logoLight';
  constructor(public themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.getActiveTheme.subscribe((res: string) => {
      this.headerLogo = res === 'light_theme' ? 'logoLight' : 'logoDark';
    });
  }
}
