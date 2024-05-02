import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/modules/shared/theme/theme.service';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private themeService: ThemeService,
              private utilityService: UtilityService,
              private $gaService: GoogleAnalyticsService ) {}
  learningPhaseImg = 'sectionLight';

  ngOnInit(): void {
    this.$gaService.pageView('/', 'Home');
    gsap.registerPlugin(ScrollToPlugin);
    this.themeService.getActiveTheme.subscribe((res: string) => {
      this.learningPhaseImg = res === 'light_theme' ? 'sectionLight' : 'sectionDark';
    });

    this.utilityService.showFooterSet = true;
  }

  scrollToTarget(target: string) {
    this.$gaService.event('scroll', `Page scroll to ${target}`)
    gsap.to(window, { duration: 0.8, scrollTo: { y: `#${target}` } });
  }

  openUrl(url: any, type: string) {
    this.$gaService.event('click', 'Hyperlink', `${type} Url`, url);
    window.open(url, '_blank');
  }
}
