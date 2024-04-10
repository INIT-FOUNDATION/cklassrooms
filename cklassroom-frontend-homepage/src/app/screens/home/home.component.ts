import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/modules/shared/theme/theme.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  learningPhaseImg = 'LearningPhasesLight';

  ngOnInit(): void {
    this.themeService.getActiveTheme.subscribe((res: string) => {
      this.learningPhaseImg =
        res === 'light_theme' ? 'LearningPhasesLight' : 'LearningPhasesDark';
    });
  }
}
