import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss'],
})
export class TestimonialComponent implements OnInit {
  getTestimonials: any = [
    {
      id: 1,
      img: 'fa-folder',
      value: '04+',
      label: 'Our Online Course',
    },
    {
      id: 2,
      img: 'fa-code',
      value: '10+',
      label: 'Academic Programs',
    },
    {
      id: 3,
      img: 'fa-graduation-cap',
      value: '08+',
      label: 'Certified Students',
    },
    {
      id: 4,
      img: 'fa-users',
      value: '10+',
      label: 'Exrolled Students',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
