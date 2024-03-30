import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss'],
})
export class WhatWeOfferComponent implements OnInit {
  moreOffering: any = [
    {
      id: 1,
      img: 'expertTalk',
      description:
        'Receive a complimentary assessment from our expert team to pinpoint the ideal course and career trajectory tailored to your background strengths.',
      label: 'Talk to Our Experts',
    },
    {
      id: 2,
      img: 'guidanceCard',
      description:
        'Collaborate with top-tier architects on the CoWIN team to contribute to groundbreaking projects and advance in your technical career.',
      label: 'Guidance',
    },
    {
      id: 3,
      img: 'corporateCulture',
      description:
        'Provide freshers with corporate-style training, offering guidance from actual corporate teams to equip them with real-world skills and prepare them effectively.',
      label: 'Corporate Culture',
    },
    {
      id: 4,
      img: 'monthsTraining',
      description:
        'Enrol in a course featuring a 3-month training followed by a 3-month internship, offering a stipend of up to 5K during the internship period based on merit.',
      label: '6 Months Training',
    },
    {
      id: 5,
      img: 'handsOnProjects',
      description:
        'Engage in interactive lectures, hands-on live projects, and practical applications in real-world scenarios to enhance learning and skill development effectively.',
      label: 'Hands-On Projects',
    },
    {
      id: 6,
      img: 'porfolioDesign',
      description:
        'Acquire mastery in essential technologies, craft a robust portfolio, and secure promising job placements through our comprehensive program tailored for success.',
      label: 'Build Strong Portfolio',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
