import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
  standalone: true
})
export class FaqComponent implements OnInit {
  faqAccordianList: any = [
    {
      id: 1,
      label:
        'Who is eligible for the CKlassroom Fellowship Program in Software Development?',
      value:
        'The CKlassroom Fellowship Program in Software Development is open to all graduates and working professionals.',
    },
    {
      id: 2,
      label: 'What is the duration of this program?',
      value:
        'The program will take on average 9 months to complete. The program duration can increase or decrease by 1-2 months based on your current expertise level',
    },
    {
      id: 3,
      label: 'Is this an online program?',
      value: 'Yes. This is a completely online program.',
    },
    {
      id: 4,
      label: 'How does the program work?',
      value:
        'This is an experiential learning program that dives deep into building professional-grade projects in a real-world developer environment. Both the programs give you the opportunity to connect with tech industry experts and have one-on-one sessions with them. With CKlassroom, you can upskill with in-demand tech skills and build your career with confidence.',
    },
    {
      id: 5,
      label: 'Are there any live sessions?',
      value:
        'Yes. You will have 80+ live industry mentor sessions and live Q&A sessions throughout your learning journey to dive deep into a variety of concepts and help you achieve your career goals.',
    },
    {
      id: 6,
      label: 'What if I miss any live sessions?',
      value:
        'All live sessions are recorded and you will have access to the recordings after the session is completed.',
    },
    {
      id: 7,
      label: 'Are the timings flexible during the program?',
      value:
        'You are expected to spend 15 hours a week to achieve the program goals. You can distribute the 15 hours across the week according to your work schedule without missing the program goals.',
    },
    {
      id: 8,
      label: 'Will I get a certificate at the end of the program?',
      value:
        'Yes, you will receive a CKlassroom Fellowship Program completion certificate along with a verified GitHub page. The GitHub page will be a personalised profile to showcase the details of the work you completed in the program. Also, all the code you write in the program will get automatically synced to your GitHub profile.',
    },
    {
      id: 9,
      label:
        'How do I secure a scholarship to attend the CKlassroom Fellowship Program in Software Development?',
      value:
        "Scholarships are decided based on your profile and your performance in the program's free trial. You can get in touch with our Program Advisors to know more",
    },
    {
      id: 10,
      label: "Can I get EMI if I don't have a credit card?",
      value:
        'Yes, you can. No-cost EMI and low-cost EMI options are available through our finance partners. You can get in touch with our Program Advisors to know more',
    },
    {
      id: 11,
      label:
        'Which companies will I be referred to on completing the CKlassroom Fellowship Program?',
      value:
        'Job opportunities span across MNCs, startups and product-based companies.',
    },
    {
      id: 12,
      label: 'What if I decide to leave in the middle of the program?',
      value:
        'There will be no refund/no cancellation if you do not complete the program and leave midway.',
    },
    {
      id: 13,
      label: 'Does everybody get a placement guarantee?',
      value:
        'CKlassroom’s job guarantee comes with certain conditions. Kindly refer to the ‘CKlassroom Job Guarantee Explained’ section to understand it better. You can get in touch with our Program Advisors to know more.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
