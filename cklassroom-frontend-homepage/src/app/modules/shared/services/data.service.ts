import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
declare var require: any;

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _userDetails: any;
  private profilePicUrl: any; //  = 'assets/images/default-avatar.png';
  private appVersionNo: string = require('../../../../../package.json').version;
  private userDataSubject: BehaviorSubject<any>;
  public userData: Observable<any>;
  private profilePicSubject: BehaviorSubject<any>;
  public profilePic: Observable<any>;
  private signaturePicSubject: BehaviorSubject<any>;
  public signaturePic: Observable<any>;
  public permission;
  private permissionSubject: BehaviorSubject<any>;
  public permissionPresent$: Observable<any>;
  public searchValue:BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.userDataSubject = new BehaviorSubject<any>(null);
    this.userData = this.userDataSubject.asObservable();
    this.profilePicSubject = new BehaviorSubject<any>(null);
    this.profilePic = this.profilePicSubject.asObservable();
    this.signaturePicSubject = new BehaviorSubject<any>(null);
    this.signaturePic = this.signaturePicSubject.asObservable();
    this.permissionSubject = new BehaviorSubject<any>(false);
    this.permissionPresent$ = this.permissionSubject.asObservable();
    this.searchValue = new BehaviorSubject<any>(null);

  }

  set permissions(flag){
    this.permissionSubject.next(flag);
  }

  get userDetails() {
    return this._userDetails;
  }

  set userDetails(userDetails) {
    this._userDetails = {...this._userDetails, ...userDetails};
    this.userDataSubject.next(this._userDetails);
  }

  setProfilePic(data: any) {
    this.profilePicSubject.next(data);
  }

  setSignaturePic(data:any){
    this.signaturePicSubject.next(data);
  }

  get appVersion() {
    return this.appVersionNo;
  }

  set appVersion(val) {
    this.appVersionNo = val;
  }
}
