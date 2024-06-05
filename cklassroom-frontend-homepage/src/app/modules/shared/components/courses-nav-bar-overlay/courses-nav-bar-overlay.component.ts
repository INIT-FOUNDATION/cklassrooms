import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-courses-nav-bar-overlay',
  templateUrl: './courses-nav-bar-overlay.component.html',
  styleUrls: ['./courses-nav-bar-overlay.component.scss']
})
export class CoursesNavBarOverlayComponent implements OnInit {
  courses: any[] = [];
  courseCategory: any[] = [];
  selectedCategory: string = 'Beginner';

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadCourses();
    this.loadCategory();
  }

  loadCourses() {
    this.courses = this.dataService.getCourseDetails();
  }

  loadCategory(){
    this.courseCategory = this.dataService.getCourseCategoryDetails()
  }

  get filteredCourses() {
    return this.courses.filter(course => course.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  // categories = ['Beginner', 'Basic', 'Intermediate', 'Expert'];
  // selectedCategory = 'Beginner';
  // courses = [
  //   {
  //     category: 'Beginner',
  //     name: 'Angular',
  //     tag: 'Beginner',
  //     description: 'Develop modern, complex, responsive and scalable web applications with Angular.',
  //     amount: 1999,
  //     days: 45,
  //     sessions: 20,
  //     image: 'assets/images/coursesDialog/angularCourse.svg'
  //   },
  //   {
  //     category: 'Beginner',
  //     name: 'HTML, CSS & JS',
  //     tag: 'Beginner',
  //     description: 'Develop modern, complex, responsive and scalable web applications with Angular.',
  //     amount: 1999,
  //     days: 45,
  //     sessions: 20,
  //     image: 'assets/images/coursesDialog/htmlCssJsCourse.svg'
  //   },
  //   {
  //     category: 'Beginner',
  //     name: 'Python',
  //     tag: 'Beginner',
  //     description: 'Develop modern, complex, responsive and scalable web applications with Angular.',
  //     amount: 1999,
  //     days: 45,
  //     sessions: 20,
  //     image: 'assets/images/coursesDialog/pythonCourse.svg'
  //   },
  //   {
  //     category: 'Basic',
  //     name: 'Angular',
  //     tag: 'Basic',
  //     description: 'Develop modern, complex, responsive and scalable web applications with Angular.',
  //     amount: 3999,
  //     days: 45,
  //     sessions: 30,
  //     image: 'assets/images/coursesDialog/angularCourse.svg'
  //   },
  //   {
  //     category: 'Basic',
  //     name: 'HTML, CSS & JS',
  //     tag: 'Basic',
  //     description: 'Develop modern, complex, responsive and scalable web applications with Angular.',
  //     amount: 3999,
  //     days: 45,
  //     sessions: 30,
  //     image: 'assets/images/coursesDialog/htmlCssJsCourse.svg'
  //   },
  //   {
  //     category: 'Basic',
  //     name: 'Python',
  //     tag: 'Basic',
  //     description: 'Develop modern, complex, responsive and scalable web applications with Python.',
  //     amount: 3999,
  //     days: 45,
  //     sessions: 30,
  //     image: 'assets/images/coursesDialog/pythonCourse.svg'
  //   },
  //   {
  //     category: 'Intermediate',
  //     name: 'Angular',
  //     tag: 'Intermediate',
  //     description: 'Develop modern, complex, responsive and scalable web applications with Angular.',
  //     amount: 3999,
  //     days: 45,
  //     sessions: 30,
  //     image: 'assets/images/coursesDialog/angularCourse.svg'
  //   },
  //   {
  //     category: 'Intermediate',
  //     name: 'HTML, CSS & JS',
  //     tag: 'Intermediate',
  //     description: 'Develop modern, complex, responsive and scalable web applications with Angular.',
  //     amount: 3999,
  //     days: 45,
  //     sessions: 30,
  //     image: 'assets/images/coursesDialog/htmlCssJsCourse.svg'
  //   },
  //   {
  //     category: 'Intermediate',
  //     name: 'Python',
  //     tag: 'Intermediate',
  //     description: 'Develop modern, complex, responsive and scalable web applications with Python.',
  //     amount: 3999,
  //     days: 45,
  //     sessions: 30,
  //     image: 'assets/images/coursesDialog/pythonCourse.svg'
  //   },
  //   {
  //     category: 'Expert',
  //     name: 'Angular',
  //     tag: 'Expert',
  //     description: 'Develop modern, complex, responsive and scalable web applications with Angular.',
  //     amount: 3999,
  //     days: 45,
  //     sessions: 30,
  //     image: 'assets/images/coursesDialog/angularCourse.svg'
  //   },
  //   {
  //     category: 'Expert',
  //     name: 'HTML, CSS & JS',
  //     tag: 'Expert',
  //     description: 'Develop modern, complex, responsive and scalable web applications with Angular.',
  //     amount: 3999,
  //     days: 45,
  //     sessions: 30,
  //     image: 'assets/images/coursesDialog/htmlCssJsCourse.svg'
  //   },
  //   {
  //     category: 'Expert',
  //     name: 'Python',
  //     tag: 'Expert',
  //     description: 'Develop modern, complex, responsive and scalable web applications with Python.',
  //     amount: 3999,
  //     days: 45,
  //     sessions: 30,
  //     image: 'assets/images/coursesDialog/pythonCourse.svg'
  //   },
  // ];

  // get filteredCourses() {
  //   return this.courses.filter(course => course.category === this.selectedCategory);
  // }

  // selectCategory(category: string) {
  //   this.selectedCategory = category;
  // }
}
