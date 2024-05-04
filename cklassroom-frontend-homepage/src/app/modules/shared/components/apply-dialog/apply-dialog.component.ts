import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
// import * as jobRolesData from '../../../../../assets/json/job_roles.json';
// import * as educationDegress from '../../../../../assets/json/education_degress.json';
// import * as companiesData from '../../../../../assets/json/companies.json';
import { Observable, forkJoin, map, startWith } from 'rxjs';
import { DataService } from '../../services/data.service';
import { UtilityService } from '../../services/utility.service';
import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-apply-dialog',
  templateUrl: './apply-dialog.component.html',
  styleUrls: ['./apply-dialog.component.scss'],
})
export class ApplyDialogComponent implements OnInit {
  activeScreen = 'step1';
  step1Form: FormGroup;
  step2Form: FormGroup;
  form1Submitted = false;
  
  filteredEducationDegreeOptions: Observable<any[]>;
  educationDegrees: any[] = [];

  filteredJobRolesOptions: Observable<any[]>;
  jobRoles = [];

  filteredCompaniesOptions: Observable<any[]>;
  companies = [];

  publicIp = "";
  
  startYear = 2002;
  endYear = 2028;
  graduation_year_list = Array.from({ length: this.endYear - this.startYear + 1 }, (_, index) => this.endYear - index);

  constructor(private dialog: MatDialog,
              private dataService: DataService,
              private utilityService: UtilityService,
              private $gaService: GoogleAnalyticsService) {}

  ngOnInit(): void {
    this.initForms();
    this.loadAllStaticData();
    this.filteredEducationDegreeOptions = this.step2Form.get("education").valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string, this.educationDegrees, 'name') : this.educationDegrees.slice();
      }),
    );

    this.filteredJobRolesOptions = this.step2Form.get("job_role").valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string, this.jobRoles, 'title') : this.jobRoles.slice();
      }),
    );

    this.filteredCompaniesOptions = this.step2Form.get("company").valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string, this.companies, null) : this.companies.slice();
      }),
    );
  }

  loadAllStaticData() {
    forkJoin({
      educationDegrees: this.dataService.getEducationDegrees(),
      jobRoles: this.dataService.getJobRoles(),
      companies: this.dataService.getCompanies(),
      publicIp: this.dataService.getPublicIp()
    }).subscribe((res: any) => {
      this.educationDegrees = res.educationDegrees;
      this.jobRoles = res.jobRoles;
      this.companies = res.companies['Companies'];
      this.publicIp = res.publicIp['ip'];
    })
  }

  private _filter(name: string, allValues: any[], filterOn: string): any[] {
    const filterValue = name.toLowerCase();

    return allValues.filter(option =>  filterOn ? option[filterOn].toLowerCase().includes(filterValue) : option.toLowerCase().includes(filterValue));
  }

  initForms() {
    this.step1Form = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      mobileNumber: new FormControl(null, [Validators.required]),
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

  submitBooking() {
    if (this.step2Form.valid) {
      const form1Value = this.step1Form.getRawValue();
      const form2Value = this.step2Form.getRawValue();

      const payload: any = {
        ...form1Value,
        ...form2Value,
        client_ip: this.publicIp
      }

      this.$gaService.event('submit', 'Form', 'Apply form step 2', (JSON.stringify(payload) as any));

      this.dataService.enquiry(payload).subscribe(res=> {
        this.utilityService.showSuccessMessage("Request submitted successfully");
        this.dialog.closeAll();
      })
    }
  }

  changeScreen(name) {
    if (name === 'step2') {
      this.form1Submitted = true;
      const step1FormValid = this.step1Form.valid;
      const data: any = this.step1Form.getRawValue()
      this.$gaService.event('submit', 'Form', 'Apply form step 1', (JSON.stringify(data) as any));
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
