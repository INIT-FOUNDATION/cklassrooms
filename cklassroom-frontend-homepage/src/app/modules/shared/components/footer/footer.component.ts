import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ThemeService } from '../../theme/theme.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear = moment().year();
  headerLogo = 'logoLight';
  courses: any = [];
  categories: any = [];
  categoryWiseCourses: any = {};
  constructor(public themeService: ThemeService,
              private router: Router,
              private dataService: DataService) {}

  ngOnInit(): void {
    this.themeService.getActiveTheme.subscribe((res: string) => {
      this.headerLogo = res === 'light_theme' ? 'logoLight' : 'logoDark';
    });

    this.courses = this.dataService.getCourseDetails();
    this.categories = this.dataService.getCourseCategoryDetails();
    this.categories.forEach(element => {
      let corse = this.courses.filter(el => el.category === element);
      console.log(corse);
      this.categoryWiseCourses[element] = corse;
    });
  }

  openCourseDetailsPage(courseName) {
    this.router.navigate([`/course-details/${courseName}`]);
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }
}
