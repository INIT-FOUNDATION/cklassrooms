import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-placements',
  templateUrl: './job-placements.component.html',
  styleUrls: ['./job-placements.component.scss'],
})
export class JobPlacementsComponent implements OnInit {
  jobPlacements: any = [
    {
      id: 1,
      img: 'expertTalk',
      description:
        'Acquire mastery in full-stack and backend development within a simulated professional setting.',
      label:
        'Engaging in 6+ professional projects alongside over 20 micro skilling exercises',
    },
    {
      id: 2,
      img: 'guidanceCard',
      description:
        'Experience seamless learning with our technical support, available 12 hours daily.',
      label:
        'Access live chat support and personalized success management services.',
    },
    {
      id: 3,
      img: 'monthsTraining',
      description:
        'Access expert-led interview prep, resume refinement, and career counseling for professional success.',
      label:
        'Access tailored career services designed exclusively for your professional advancement.',
    },
    {
      id: 4,
      img: 'corporateCulture',
      description:
        'Receive mentorship from seasoned professionals in the tech industry, hailing from leading companies.',
      label:
        'Experience over 80+ live, interactive guided sessions to enhance learning and engagement.',
    },
    {
      id: 5,
      img: 'handsOnProjects',
      description:
        'Develop robust problem-solving abilities to excel in technical interviews.',
      label:
        'Explore 200+ DSA problems and 20+ System Design challenges for skill enhancement.',
    },
    {
      id: 6,
      img: 'porfolioDesign',
      description:
        'Forge connections, network, and collaborate with alumni who have secured positions in leading tech firms.',
      label: 'Join a vibrant community of over 5000 active learners.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
