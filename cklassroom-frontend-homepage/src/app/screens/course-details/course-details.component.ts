import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/modules/shared/services/data.service';
declare var jsMind: any;

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit, AfterViewInit {
  courseName = "";
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private dataService: DataService) { 
    this.courseName = activatedRoute.snapshot.params.courseName;
  }

  ngOnInit(): void {
    
  }

  async ngAfterViewInit() {
    const mindMapData = await this.dataService.loadMindMapData(this.courseName).toPromise();
    const options = {                     // for more detail at next chapter
      container:'jsmind_container',   // [required] id of container
      editable:false,                  // [required] whether allow edit or not
      theme:'greensea'                  // [required] theme
    };
    const jm = new jsMind(options);
    jm.show(mindMapData);
  }

}
