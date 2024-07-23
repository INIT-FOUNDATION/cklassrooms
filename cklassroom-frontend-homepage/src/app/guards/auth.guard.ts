import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

// @Injectable({
//   providedIn: 'root'
// })

// export class AuthGuard  {
//   constructor(private router: Router,
//   ) {
//   }
//   exclude_urls = ['/login'];
//   urls_can_visit_bfr_login = ['/login', '/home'];
//   canActivate(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): boolean {
  
//     return true;
//   }

// }


export const AuthGuardFn: CanActivateFn = (route: ActivatedRouteSnapshot,state: RouterStateSnapshot) => {
  return true;
}
