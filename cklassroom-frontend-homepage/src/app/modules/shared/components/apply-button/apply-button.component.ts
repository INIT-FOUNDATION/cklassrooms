import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-button',
  templateUrl: './apply-button.component.html',
  styleUrls: ['./apply-button.component.scss']
})
export class ApplyButtonComponent implements OnInit {

  @Input() additionalClasses: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  openGoogleForm() {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSctm8H7yKqLHWyCKGrLFW5GnWcMAWGlvSOgqHM3ruTiAjapDw/viewform?usp=sf_link", "_blank");
  }

}
