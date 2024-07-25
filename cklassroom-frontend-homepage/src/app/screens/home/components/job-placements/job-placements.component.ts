import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-placements',
  templateUrl: './job-placements.component.html',
  styleUrls: ['./job-placements.component.scss'],
  standalone: true
})
export class JobPlacementsComponent implements OnInit {
  jobPlacements: any = [
    {
      id: 1,
      img: 'jobPlacement1',
      description:
        'Acquire mastery in full-stack and backend development within a simulated professional setting.',
      label: 'Engaging in 10+ professional projects',
    },
    {
      id: 2,
      img: 'jobPlacement2',
      description:
        'Experience seamless learning with our technical support, available 12 hours daily.',
      label:
        'Access live chat support and personalized success management services.',
    },
    {
      id: 3,
      img: 'jobPlacement3',
      description:
        'Access expert-led interview prep, resume refinement, and career counseling for professional success.',
      label:
        'Access tailored career services designed exclusively for your professional advancement.',
    },
    {
      id: 4,
      img: 'jobPlacement4',
      description:
        'Receive mentorship from seasoned professionals in the tech industry, hailing from leading companies.',
      label:
        'Experience live, interactive guided sessions to enhance learning and engagement.',
    },
    {
      id: 5,
      img: 'jobPlacement5',
      description:
        'Develop robust problem-solving abilities to excel in technical interviews.',
      label:
        'Explore DSA problems and System Design challenges for skill enhancement.',
    },
    {
      id: 6,
      img: 'jobPlacement6',
      description:
        'Forge connections, network, and collaborate with alumni who have secured positions in leading tech firms.',
      label: 'Join a vibrant community of active learners.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
