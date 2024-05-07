import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoogleAnalyticsService } from 'ngx-google-analytics';
import { DataService } from 'src/app/modules/shared/services/data.service';
import { UtilityService } from 'src/app/modules/shared/services/utility.service';
declare var jsMind: any;

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss'],
})
export class CourseDetailsComponent implements OnInit, AfterViewInit {
  courseName = '';
  mindMapJson: any = {};
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private utilityService: UtilityService,
    private $gaService: GoogleAnalyticsService
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
    const options = {
      // for more detail at next chapter
      container: 'jsmind_container', // [required] id of container
      editable: false, // [required] whether allow edit or not
      theme: 'greensea', // [required] theme
    };
    const jm = new jsMind(options);
    jm.show(this.mindMapJson.mindMapData);
  }

  downloadPdf() {
    this.$gaService.event('click', 'Button', 'Download PDF', this.mindMapJson.additionalData.pdfName)
    const anchor = document.createElement('a');
    anchor.href = this.mindMapJson.additionalData.pdfUrl;
    anchor.download = this.mindMapJson.additionalData.pdfName; // Name of the downloaded file
    anchor.click();
  }
}
