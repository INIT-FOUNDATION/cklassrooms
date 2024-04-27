import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/modules/shared/theme/theme.service';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private themeService: ThemeService,
              private utilityService: UtilityService) {}
  learningPhaseImg = 'sectionLight';

  ngOnInit(): void {
    gsap.registerPlugin(ScrollToPlugin);
    this.themeService.getActiveTheme.subscribe((res: string) => {
      this.learningPhaseImg =
        res === 'light_theme' ? 'sectionLight' : 'sectionDark';
    });

    this.utilityService.showFooterSet = true;
  }

  scrollToTarget(target: string) {
    gsap.to(window, { duration: 0.8, scrollTo: { y: `#${target}` } });
  }
}
