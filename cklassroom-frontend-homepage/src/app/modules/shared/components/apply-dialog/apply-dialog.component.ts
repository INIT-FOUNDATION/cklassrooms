import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-dialog',
  templateUrl: './apply-dialog.component.html',
  styleUrls: ['./apply-dialog.component.scss']
})
export class ApplyDialogComponent implements OnInit {
  activeScreen = "step1";
  step1Form: FormGroup;
  step2Form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initForms();
  }


  initForms() {
    this.step1Form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      mobile_number: new FormControl(null, [Validators.required]),
    });

    this.step2Form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      education: new FormControl(null, [Validators.required]),
      graduation_year: new FormControl(null, [Validators.required]),
      working: new FormControl(null, [Validators.required]),
      job_domain: new FormControl(null),
      job_role: new FormControl(null),
      company: new FormControl(null),
    });
  }

  changeScreen(name) {
    this.activeScreen = name;
  }

}
