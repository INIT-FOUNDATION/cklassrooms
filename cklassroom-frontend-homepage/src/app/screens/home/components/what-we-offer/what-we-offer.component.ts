import { AfterViewInit, Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
@Component({
  selector: 'app-what-we-offer',
  templateUrl: './what-we-offer.component.html',
  styleUrls: ['./what-we-offer.component.scss'],
})
export class WhatWeOfferComponent implements OnInit, AfterViewInit {
  whatWeOffer: any = [
    {
      image: 'skillsDevelopment.svg',
      title: 'Skills Development',
      mainDivClass: 'scroll-animation',
      placement: 'left',
      description: `Tailored training, workshops, and practical experiences to equip
      individuals with technical, soft, and professional skills essential for
      success in their career.`,
      tags: ['Online Courses', 'Personal Tranings'],
    },
    {
      image: 'guidelineAndCounselling.svg',
      mainDivClass: 'scroll-animation',
      placement: 'right',
      title: 'Career Guidance and Counselling',
      description: `Personalised support in identifying strengths, interests, and career
      goals, alongside assistance in resume writing, interview preparation,
      and networking strategies for career success.`,
      tags: ['Strength Enhancement', 'One-to-One Counselling'],
    },
    {
      image: 'jobPlacement.svg',
      title: 'Job Placements',
      mainDivClass: 'scroll-animation',
      placement: 'left',
      description: `Facilitating connections with employers, identifying job openings, and
      providing support in application processes, interview preparation, and
      negotiation techniques for successful employment outcomes.`,
      tags: ['Interview Preparations', 'Walk in Interviews'],
    },
  ];

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
        'Provide freshers with corporate-style training, offering guidance from actual corporate teams to equip them with real-world skills.',
      label: 'Corporate Culture',
    },
    {
      id: 4,
      img: 'monthsTraining',
      description:
        'Enroll in a course featuring a 3-month training followed by a 3-month internship.',
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

  constructor() {}

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngAfterViewInit(): void {
    // gsap.utils.toArray('.scroll-animation').forEach((element: HTMLElement) => {
    //   gsap.from(element, {
    //     opacity: 0,
    //     y: 100,
    //     duration: 3,
    //     scrollTrigger: {
    //       trigger: element,
    //       start: 'top 80%', // trigger animation when top of element hits 80% of viewport
    //       end: 'bottom 80%', // end animation when bottom of element hits 80% of viewport
    //       once: true,
    //       toggleActions: 'play none none none', // play animation when in view, pause when out of view
    //       scrub: true, // smooth animation during scroll
    //     },
    //   });
    // });
  }
}
