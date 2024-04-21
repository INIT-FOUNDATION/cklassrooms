import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/modules/shared/theme/theme.service';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  // learningPhaseImg = 'LearningPhasesLight';
  learningPhaseImg = 'section_light';

  ngOnInit(): void {
    gsap.registerPlugin(ScrollToPlugin);
    this.themeService.getActiveTheme.subscribe((res: string) => {
      this.learningPhaseImg =
        // res === 'light_theme' ? 'LearningPhasesLight' : 'LearningPhasesDark';
        res === 'light_theme' ? 'section_light' : 'section_dark';
    });
  }

  scrollToTarget(target: string) {
    gsap.to(window, { duration: 0.8, scrollTo: { y: `#${target}` } });
  }
}
