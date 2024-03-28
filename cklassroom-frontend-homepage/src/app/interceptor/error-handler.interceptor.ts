import { AppPreferencesService } from './../modules/shared/services/preferences.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorCodes } from './error-codes.module';
import { MatDialog } from '@angular/material/dialog';


/**
 * Adds a default error handler to all requests.
 */
@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private appPreferences: AppPreferencesService,
    private dialog:  MatDialog
    ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(error => this.errorHandler(error)));
  }

  // Customize the default error handler here if needed
  private errorHandler(response: HttpEvent<any>): Observable<HttpEvent<any>> {
    // if (!environment.production) {
    //   // Do something with the error
    //   // console.log('Request error', response);
    // }

    const isJson = (str: string) => {
      try {
          JSON.parse(str);
      } catch (e) {
          return false;
      }
      return true;
    };

    if (response instanceof HttpErrorResponse) {
      switch (response.status) {
        case 401:      // login
          if (this.appPreferences.getValue('userToken')) {
            this.router.navigateByUrl('/unauthorized');
          }
          break;
        case 403:     // forbidden
          this.router.navigateByUrl('/forbidden');
          break;
        case 409:
        case 400:
          if (response.error) {
            if (typeof(response.error) === 'string') {
              if (isJson(response.error)) {
                const errmsg = JSON.parse(response.error);

                if (errmsg.errorCode === 'MEET000117') {
                  const navigationExtras: NavigationExtras = {
                    state: errmsg,
                  };
                  this.router.navigate(['/waiting'], navigationExtras);
                  return;
                }


                if (errmsg.errorCode === 'MEET000124') {
                  return;
                }

                /* Password Policy Conditions */
                if (errmsg.errorCode === 'USRAUT0004' ||
                errmsg.errorCode === 'USRAUT0005' ||
                errmsg.errorCode === 'USRAUT0006' || errmsg.errorCode === 'USRAUT0007') {
                  if (errmsg.errorCode === 'USRAUT0004') {
                    const userId = errmsg.userId;
                    // this.authService.userId = userId;
                    this.router.navigate(['/login/updatepassword']);
                  } else if (errmsg.errorCode === 'USRAUT0005') {
                    this.toastr.error(errmsg.error, 'Error');
                    setTimeout(() => {
                      this.router.navigate(['/login/forget']);
                    }, 100);
                  } else if (errmsg.errorCode === 'USRAUT0006') {
                    const userId = errmsg.userId;
                    // this.authService.userId = userId;
                    this.toastr.error(errmsg.error, 'Error');
                    setTimeout(() => {
                      this.router.navigate(['/login/updatepassword']);
                    }, 100);
                  } else if (errmsg.errorCode === 'USRAUT0006' || errmsg.errorCode === 'USRAUT0007') {
                    const userId = errmsg.userId;
                    // this.authService.userId = userId;
                    this.toastr.error(errmsg.error, 'Error');
                    setTimeout(() => {
                      this.router.navigate(['/login/updatepassword']);
                    }, 100);
                  }
                } else if (errmsg.errorCode == 'CONFIG0001') {
                  this.toastr.error(errmsg.error, 'Error');

                  // this.openPopupForConfig(errmsg.user_name)
                } else {
                  if (errmsg.errorCode) {
                    let errorCode: any = errmsg.errorCode;
                    const errorMessage: any = ErrorCodes[errorCode];
                    if (errorMessage) {
                      this.toastr.error(errorMessage, 'Error');
                    } else {
                      this.toastr.error(errmsg.error, 'Error');
                    }
                  } else {
                    this.toastr.error(response.error, 'Error');
                  }
                }
              } else {
                this.toastr.error(response.error, 'Error');
              }
            } else if (response.error.errorCode) {
              if (response.error.errorCode === 'MEET000117') {
                this.dialog.closeAll();
                const navigationExtras: NavigationExtras = {
                  state: response.error,
                };
                this.router.navigate(['/waiting'], navigationExtras);
              }else if (response.error.errorCode === 'MEET000124') {
                this.toastr.error(response.error.error, 'Error');
              }else if (response.error.errorCode !== 'ADMROL0002') {
                this.toastr.error(`${response.error.error}`, 'Error');
              }

            } else {
              try{
                this.toastr.error(response.error.message, 'Error');
              } catch (e) {
                console.error('Error!!! ', e);
              }
            }
          } else {
            this.toastr.error(response.error, 'Error');
          }

          break;
        case 0:
          if (window.navigator.onLine){
            this.toastr.error('Something went wrong. Please try again!', 'Error');
            break;
          } else if (!window.navigator.onLine) {
            this.toastr.error('Something went wrong. Please try again!', 'Error');
            break;
          }
          else {
            break;
          }

      }
    }
    throw response;
  }
}
