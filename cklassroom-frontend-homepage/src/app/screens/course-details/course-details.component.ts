import {
  AfterViewInit,
  Component,
  ElementRef,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/modules/shared/services/data.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
import { TweenMax } from 'gsap';
declare var Swiper;
@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit, AfterViewInit {
  panelOpenState = false;
  courseName = '';
  mindMapJson: any = {};
  getCourseList: any = [];
  filteredCourses: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private utilityService: UtilityService,
    private elementRef: ElementRef,
    private router: Router
  ) {
    this.courseName = activatedRoute.snapshot.params.courseName;
  }

  ngOnInit(): void {
    this.getCourses();
    setTimeout(() => {
      this.utilityService.showFooterSet = false;
    }, 100);
  }

  async ngAfterViewInit() {
    this.mindMapJson = await this.dataService
      .loadMindMapData(this.courseName)
      .toPromise();

    this.getCarouselData();

    const boxes =
      this.elementRef.nativeElement.querySelectorAll('.courses-card-body');

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

    window.scrollTo({ top: 0 });
  }

  getCourses() {
    this.getCourseList = this.dataService.getCourseDetails();
    this.filteredCourses = this.getCourseList.filter(
      (course) =>
        course.courseName.toLowerCase() !== this.courseName.toLowerCase()
    );
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

  getCarouselData() {
    var swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      freeMode: true,
      centeredSlides: false,
      loop: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },

      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        1800: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });
  }

  openCourseDetailsPage(courseName) {
    this.router.navigate([`/course-details/${courseName}`]);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
