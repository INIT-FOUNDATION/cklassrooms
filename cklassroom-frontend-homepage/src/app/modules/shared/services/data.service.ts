import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
declare var require: any;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private appVersionNo: string = require('../../../../../package.json').version;

  constructor(private http: HttpClient) {
  }

  getEducationDegrees() {
    return this.http.get("/assets/json/education_degress.json");
  }

  getJobRoles() {
    return this.http.get("/assets/json/job_roles.json");
  }

  getCompanies() {
    return this.http.get("/assets/json/companies.json");
  }


  loadMindMapData(course: string) {
    return this.http.get(`/assets/json/course-mindmap-data/${course}.json`);
  }


  getPublicIp() {
    return this.http.get("https://api.ipify.org/?format=json");
  }

  enquiry(payload) {
    return this.http.post(`${environment.crm_prefix_url}/enquiry`, payload);
  }

  get appVersion() {
    return this.appVersionNo;
  }

  set appVersion(val) {
    this.appVersionNo = val;
  }
}
