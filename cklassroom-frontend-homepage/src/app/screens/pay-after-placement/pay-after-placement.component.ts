import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/modules/shared/theme/theme.service';

@Component({
  selector: 'app-pay-after-placement',
  templateUrl: './pay-after-placement.component.html',
  styleUrls: ['./pay-after-placement.component.scss']
})
export class PayAfterPlacementComponent implements OnInit {

  keyFeatures: any[] = [
    {
      id: 1,
      img: 'skill-focused-curriculum',
      label: 'Skill-Focused Curriculum',
      description:
        'Comprehensive, industry-relevant courses crafted by experts to equip you with in-demand skills.',
      
    },
    {
      id: 2,
      img: 'real-world-projects',
      label: 'Real World Projects',
      description:
        'Hands-on experience through practical assignments and projects that mirror real-world scenarios.',
    
    },
    {
      id: 3,
      img: 'personalized-mentorship',
      label: 'Personalized Mentorship',
      description:
        'Access to dedicated mentors and career coaches who guide you every step of the way.',

    },
    {
      id: 4,
      img: 'job-placement-support',
      label: 'Job Placement Support',
      description:
        'Extensive career services including resume building, interview preparation, and job search assistance',
     
    },
    {
      id: 5,
      img: 'flexible-learning',
      label: 'Flexible Learning',
      description:
        'Learn at your own pace with our flexible online modules, accessible anytime, anywhere.',
    
    },
    {
      id: 6,
      img: 'vibrant-community',
      label: 'Vibrant Community',
      description:
        'Forge connections, network, and collaborate with alumni who have secured positions in leading tech firms.',
     
    },
  ];

  constructor( private themeService: ThemeService) {
   
   }
  learningPhaseImg = 'sectionLight';

  ngOnInit(): void {
    this.themeService.getActiveTheme.subscribe((res: string) => {
      this.learningPhaseImg = res === 'light_theme' ? 'sectionLight' : 'sectionDark';
    });
  }

}
