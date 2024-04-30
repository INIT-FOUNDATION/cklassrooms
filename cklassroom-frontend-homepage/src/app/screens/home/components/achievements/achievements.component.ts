import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss'],
})
export class AchievementsComponent implements OnInit {
  getTestimonials: any = [
    {
      id: 1,
      img: 'fa-code',
      value: '10+',
      label: 'Academic/Online Programs',
    },
    {
      id: 2,
      img: 'fa-graduation-cap',
      value: '100+',
      label: 'Certified Students',
    },
    {
      id: 3,
      img: 'fa-users',
      value: '100+',
      label: 'Enrolled Students',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
