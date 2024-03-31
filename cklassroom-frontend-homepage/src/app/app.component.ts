import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as AOS from 'aos';
import 'aos/dist/aos.css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  display = false;
  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }

  ngAfterViewInit(): void {}

  ngOnDestroy(): void {}
}
