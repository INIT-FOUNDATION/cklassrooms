import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-nav-bar-overlay',
  templateUrl: './courses-nav-bar-overlay.component.html',
  styleUrls: ['./courses-nav-bar-overlay.component.scss']
})
export class CoursesNavBarOverlayComponent implements OnInit {
  courses: any[] = [];
  courseCategory: any[] = [];
  selectedCategory: string = 'Beginner';

  constructor(private dataService: DataService,
              private router: Router) { }

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

  openCourseDetailsPage(courseName) {
    window.open(`/course-details/${courseName}`)
    // this.router.navigate([`/course-details/${courseName}`]);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
