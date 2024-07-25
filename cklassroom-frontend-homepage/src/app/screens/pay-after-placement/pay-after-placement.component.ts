import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { ApplyDialogComponent } from 'src/app/modules/shared/components/apply-dialog/apply-dialog.component';
import { DataService } from 'src/app/modules/shared/services/data.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { ThemeService } from 'src/app/modules/shared/theme/theme.service';
import { TestimonialComponent } from '../home/components/testimonial/testimonial.component';
@Component({
  selector: 'app-pay-after-placement',
  templateUrl: './pay-after-placement.component.html',
  styleUrls: ['./pay-after-placement.component.scss'],
  standalone: true,
  imports: [
    SharedModule,
    CommonModule,
    TestimonialComponent
  ]
})
export class PayAfterPlacementComponent implements OnInit, AfterViewInit {
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

  coursesList: any = [
    {
      id: 1,
      courseName: 'HTML, CSS and Javascript',
      img: 'htmlCssJs',
    },
    {
      id: 2,
      courseName: 'MEAN Stack',
      img: 'meanStack',
    },
    {
      id: 3,
      courseName: 'MERN Stack',
      img: 'mernStack',
    },
  ];

  faqList: any = [
    {
      id: 1,
      question:
        'What are the eligibility requirements for the Pay After Placement Program?',
      answer: 'To be eligible for the PAP program, you should:',
      answer1: 'Have a basic understanding of computers and the internet',
      answer2: 'Be a self-motivated learner with strong work ethic',
      answer3: 'Possess excellent communication and teamwork skills',
    },
    {
      id: 2,
      question: 'What is the enrolment process?',
      answer: 'The enrolment process is simple:',
      answer1:
        'Visit our website and fill out the application form for the PAP program',
      answer2:
        'Schedule a call with our admissions team to discuss your goals and program suitability',
      answer3:
        "If accepted, you'll receive a program enrolment package outlining the agreement and payment details",
      answer4:
        "Once you sign the agreement and pay the initial 20% fee, you're officially enrolled",
    },
    {
      id: 3,
      question: 'I have more questions; how can I contact you?',
      answer: "We're happy to help! You can reach us through various channels:",
      answer1: 'Fill out the contact form on our website',
      answer2: 'Call or WhatsApp us directly at +91-8527718187',
      answer3: 'Schedule a call with our admissions team through the website',
    },
    {
      id: 4,
      question: 'What is the duration of the Pay After Placement Program?',
      answer: 'The program is 6 months long, divided into two phases:',
      answer1:
        '3 months: Intensive skills training covering HTML, CSS, JavaScript (basic to advanced), and your chosen stack (MEAN or MERN)',
      answer2:
        '3 months: Practical application through real-world project development, preparing you for the job market',
    },
    {
      id: 5,
      question: 'What training modules are included in the program?',
      answer: 'The program offers comprehensive training in:',
      answer1:
        'Module 1: HTML, CSS, JavaScript (Basic to Advanced) - Gain a solid foundation in web development fundamentals',
      answer2:
        'Module 2: MEAN or MERN Stack (Basic to Advanced) - Choose your preferred stack (MongoDB, Express, Angular/React, Node.js) and master its functionalities',
    },
    {
      id: 6,
      question:
        'What type of real-world projects will I work on in the program?',
      answer:
        "You'll collaborate with your peers on real-world projects that simulate industry scenarios. Project details will be provided during the program, but they might involve:",
      answer1: 'Building dynamic and interactive web applications',
      answer2: 'Integrating databases and user authentication systems',
      answer3: 'Working on projects relevant to your career goals',
    },
    {
      id: 7,
      question:
        'Is there a guarantee of placement after completing the program?',
      answer1:
        'Cklassrooms offers guaranteed job placement services to help you secure employment in the IT field',
      answer2:
        "Once you land a job meeting the program's criteria (minimum salary, job type, etc.), you begin repaying the balance 80% course fees",
      answer3:
        'Remember, the PAP program reflects our confidence in your potential. By deferring payment until you secure a job, we share the financial risk and encourage your success',
    },
  ];

  constructor(
    private themeService: ThemeService,
    private utilityService: UtilityService,
    private dataService: DataService,
    private dialog: MatDialog,
    private $gaService: GoogleAnalyticsService
  ) {}
  learningPhaseImg = 'sectionLight';
  courseName = 'htmlCssJs';
  mindMapJson: any = {};

  ngOnInit(): void {
    this.themeService.getActiveTheme.subscribe((res: string) => {
      this.learningPhaseImg =
        res === 'light_theme'
          ? 'placement-roadmap-light'
          : 'placement-roadmap-dark';
    });
  }

  async ngAfterViewInit() {
    this.mindMapJson = await this.dataService
      .loadMindMapData(this.courseName)
      .toPromise();
  }

  openCourseDetailsPage(courseName) {
    window.open(`/course-details/${courseName}`);
    this.utilityService.showFooterSet = false;
  }

  async onTabChanged(data) {
    this.courseName =
      data.index == 0
        ? 'htmlCssJs'
        : data.index == 1
        ? 'meanStack'
        : data.index == 2
        ? 'mernStack'
        : 'htmlCssJs';

    this.mindMapJson = await this.dataService
      .loadMindMapData(this.courseName)
      .toPromise();
  }

  openDialog() {
    this.$gaService.event('click', 'Button', 'Open Apply dialog box', 1);
    this.dialog.open(ApplyDialogComponent, {
      width: 'clamp(20rem, 60vw, 35rem)',
    });
  }

  downloadPdf(pdfName: any, pdfUrl: string) {
    this.$gaService.event(
      'click',
      'Button',
      'Download PDF',
      pdfName
    );
    const anchor = document.createElement('a');
    anchor.href = pdfUrl;
    anchor.download = pdfName;
    anchor.click();
  }
}
