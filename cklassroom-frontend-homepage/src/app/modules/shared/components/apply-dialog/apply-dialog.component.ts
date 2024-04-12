import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-apply-dialog',
  templateUrl: './apply-dialog.component.html',
  styleUrls: ['./apply-dialog.component.scss'],
})
export class ApplyDialogComponent implements OnInit {
  activeScreen = 'step1';
  step1Form: FormGroup;
  step2Form: FormGroup;
  constructor(private dialog: MatDialog) {}

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

  onDropDownChange(formControlName: string) {
    const value = this.step2Form.get(formControlName).value;
    if (formControlName === 'working') {
      if (value === 'yes') {
        this.step2Form.get('job_domain').setValidators([Validators.required]);
        this.step2Form.get('job_role').setValidators([Validators.required]);
        this.step2Form.get('company').setValidators([Validators.required]);
      } else {
        this.step2Form.get('job_domain').clearValidators();
        this.step2Form.get('job_role').clearValidators();
        this.step2Form.get('company').clearValidators();
      }
      this.step2Form.get('job_domain').updateValueAndValidity();
      this.step2Form.get('job_role').updateValueAndValidity();
      this.step2Form.get('company').updateValueAndValidity();
    }
  }

  changeScreen(name) {
    if (name === 'step2') {
      const step1FormValid = this.step1Form.valid;
      if (step1FormValid) {
        this.activeScreen = name;
      }
    } else {
      this.activeScreen = name;
    }
  }

  closeModal() {
    this.dialog.closeAll();
  }
}
