import { Component, OnInit, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {  
  display = false;  
  constructor(

  ) { }


  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {
  }
}
