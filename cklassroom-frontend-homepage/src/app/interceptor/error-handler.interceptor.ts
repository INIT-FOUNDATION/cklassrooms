import { AppPreferencesService } from './../modules/shared/services/preferences.service';
import { inject } from '@angular/core';
import { HttpEvent, HttpRequest, HttpErrorResponse, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router, NavigationExtras } from '@angular/router';
import { ErrorCodes } from './error-codes.module';
import { MatDialog } from '@angular/material/dialog';
import { UtilityService } from '../modules/shared/services/utility.service';


export const ErrorHandlerInterceptor: HttpInterceptorFn = (request: HttpRequest<any>, next: HttpHandlerFn) => {
  return next(request).pipe(catchError(error => errorHandler(error)));
}

const errorHandler = (response: HttpEvent<any>): Observable<HttpEvent<any>> => {
  const router = inject(Router);
  const appPreferences = inject(AppPreferencesService);
  const dialog = inject(MatDialog);
  const utilityService = inject(UtilityService);

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
        if (appPreferences.getValue('userToken')) {
          router.navigateByUrl('/unauthorized');
        }
        break;
      case 403:     // forbidden
        router.navigateByUrl('/forbidden');
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
                router.navigate(['/waiting'], navigationExtras);
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
                  // authService.userId = userId;
                  router.navigate(['/login/updatepassword']);
                } else if (errmsg.errorCode === 'USRAUT0005') {
                  utilityService.showErrorMessage(errmsg.error);
                  setTimeout(() => {
                    router.navigate(['/login/forget']);
                  }, 100);
                } else if (errmsg.errorCode === 'USRAUT0006') {
                  const userId = errmsg.userId;
                  // authService.userId = userId;
                  utilityService.showErrorMessage(errmsg.error);
                  setTimeout(() => {
                    router.navigate(['/login/updatepassword']);
                  }, 100);
                } else if (errmsg.errorCode === 'USRAUT0006' || errmsg.errorCode === 'USRAUT0007') {
                  const userId = errmsg.userId;
                  // authService.userId = userId;
                  utilityService.showErrorMessage(errmsg.error);
                  setTimeout(() => {
                    router.navigate(['/login/updatepassword']);
                  }, 100);
                }
              } else if (errmsg.errorCode == 'CONFIG0001') {
                utilityService.showErrorMessage(errmsg.error);

                // openPopupForConfig(errmsg.user_name)
              } else {
                if (errmsg.errorCode) {
                  let errorCode: any = errmsg.errorCode;
                  const errorMessage: any = ErrorCodes[errorCode];
                  if (errorMessage) {
                    utilityService.showErrorMessage(errorMessage);
                  } else {
                    utilityService.showErrorMessage(errmsg.error);
                  }
                } else {
                  utilityService.showErrorMessage(response.error);
                }
              }
            } else {
              utilityService.showErrorMessage(response.error);
            }
          } else if (response.error.errorCode) {
            if (response.error.errorCode === 'MEET000117') {
              dialog.closeAll();
              const navigationExtras: NavigationExtras = {
                state: response.error,
              };
              router.navigate(['/waiting'], navigationExtras);
            }else if (response.error.errorCode === 'MEET000124') {
              utilityService.showErrorMessage(response.error.error);
            }else if (response.error.errorCode !== 'ADMROL0002') {
              utilityService.showErrorMessage(`${response.error.error}`);
            }

          } else {
            try{
              utilityService.showErrorMessage(response.error.message);
            } catch (e) {
              console.error('Error!!! ', e);
            }
          }
        } else {
          utilityService.showErrorMessage(response.error);
        }

        break;
      case 0:
        if (window.navigator.onLine){
          utilityService.showErrorMessage('Something went wrong. Please try again!');
          break;
        } else if (!window.navigator.onLine) {
          utilityService.showErrorMessage('Something went wrong. Please try again!');
          break;
        }
        else {
          break;
        }

    }
  }
  throw response;
}
