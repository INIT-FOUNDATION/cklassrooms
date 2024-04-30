import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placement-support',
  templateUrl: './placement-support.component.html',
  styleUrls: ['./placement-support.component.scss'],
})
export class PlacementSupportComponent implements OnInit {
  careerPlacementSupport: any = [
    {
      id: 1,
      img: 'mockInterview',
      description:
        'Enhance interview skills through mock interviews and refine resumes in our interactive workshops designed to boost your professional profile and career readiness.',
      label: 'Mock Interviews',
    },
    {
      id: 2,
      img: 'placementSupport',
      description:
        'Access job placement assistance facilitated by our network of partner companies, ensuring opportunities aligned with your goals and expertise for a successful career transition.',
      label: 'Placement Support',
    },
    {
      id: 3,
      img: 'jobSearchStrategies',
      description:
        'Receive expert advice on effective job search strategies and thorough interview preparation guidance to equip you for success in securing your desired position.',
      label: 'Job Search Strategies',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
