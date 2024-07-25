import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TweenMax } from 'gsap';
import { DataService } from 'src/app/modules/shared/services/data.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  standalone: true
})
export class CoursesComponent implements OnInit, AfterViewInit {
  constructor(
    private elementRef: ElementRef,
    private router: Router,
    private utilityService: UtilityService,
    private dataService: DataService
  ) {}

  getCourseList: any = [];

  ngOnInit(): void {
    this.getCourses();
  }

  ngAfterViewInit(): void {
    const boxes =
      this.elementRef.nativeElement.querySelectorAll('.courses-card');

    for (let i = 0; i < boxes.length; i++) {
      boxes[i].addEventListener('mouseenter', (e) => {
        const x = e.pageX - boxes[i].offsetLeft;
        const y = e.pageY - boxes[i].offsetTop;
        const edge = this.closestEdge(
          x,
          y,
          boxes[i].clientWidth,
          boxes[i].clientHeight
        );
        const overlay = boxes[i].childNodes[1];
        const image = boxes[i].childNodes[0];

        switch (edge) {
          case 'left':
            overlay.style.top = '0%';
            overlay.style.left = '-100%';
            TweenMax.to(overlay, 0.5, { left: '0%' });
            TweenMax.to(image, 0.5, { scale: 1.2 });
            break;
          case 'right':
            overlay.style.top = '0%';
            overlay.style.left = '100%';
            TweenMax.to(overlay, 0.5, { left: '0%' });
            TweenMax.to(image, 0.5, { scale: 1.2 });
            break;
          case 'top':
            overlay.style.top = '-100%';
            overlay.style.left = '0%';
            TweenMax.to(overlay, 0.5, { top: '0%' });
            TweenMax.to(image, 0.5, { scale: 1.2 });
            break;
          case 'bottom':
            overlay.style.top = '100%';
            overlay.style.left = '0%';
            TweenMax.to(overlay, 0.5, { top: '0%' });
            TweenMax.to(image, 0.5, { scale: 1.2 });
            break;
        }
      });

      boxes[i].addEventListener('mouseleave', (e) => {
        const x = e.pageX - boxes[i].offsetLeft;
        const y = e.pageY - boxes[i].offsetTop;
        const edge = this.closestEdge(
          x,
          y,
          boxes[i].clientWidth,
          boxes[i].clientHeight
        );
        const overlay = boxes[i].childNodes[1];
        const image = boxes[i].childNodes[0];

        switch (edge) {
          case 'left':
            TweenMax.to(overlay, 0.5, { left: '-100%' });
            TweenMax.to(image, 0.5, { scale: 1.0 });
            break;
          case 'right':
            TweenMax.to(overlay, 0.5, { left: '100%' });
            TweenMax.to(image, 0.5, { scale: 1.0 });
            break;
          case 'top':
            TweenMax.to(overlay, 0.5, { top: '-100%' });
            TweenMax.to(image, 0.5, { scale: 1.0 });
            break;
          case 'bottom':
            TweenMax.to(overlay, 0.5, { top: '100%' });
            TweenMax.to(image, 0.5, { scale: 1.0 });
            break;
        }
      });
    }
  }

  getCourses() {
    this.getCourseList = this.dataService.getCourseDetails();
  }

  closestEdge(x: number, y: number, width: number, height: number): string {
    const topEdgeDist = y;
    const bottomEdgeDist = height - y;
    const leftEdgeDist = x;
    const rightEdgeDist = width - x;

    const min = Math.min(
      topEdgeDist,
      bottomEdgeDist,
      leftEdgeDist,
      rightEdgeDist
    );

    switch (min) {
      case topEdgeDist:
        return 'top';
      case bottomEdgeDist:
        return 'bottom';
      case leftEdgeDist:
        return 'left';
      case rightEdgeDist:
        return 'right';
      default:
        return '';
    }
  }

  openCourseDetailsPage(courseName) {
    window.open(`/course-details/${courseName}`);
  }
}
