import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/modules/shared/services/data.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit, AfterViewInit {
  panelOpenState = false;
  courseName = '';
  mindMapJson: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private utilityService: UtilityService,
  ) {
    this.courseName = activatedRoute.snapshot.params.courseName;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.utilityService.showFooterSet = false;
    }, 100);
  }

  async ngAfterViewInit() {
    this.mindMapJson = await this.dataService
      .loadMindMapData(this.courseName)
      .toPromise();
  }

}
