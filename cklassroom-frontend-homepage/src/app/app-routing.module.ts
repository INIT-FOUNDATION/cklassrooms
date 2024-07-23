import { NgModule } from '@angular/core';
import { NavigationEnd, Router, RouterModule, Routes } from '@angular/router';
import { AuthGuardFn } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./screens/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuardFn],
  },

  {
    path: 'course-details',
    loadChildren: () =>
      import('./screens/course-details/course-details.module').then(
        (m) => m.CourseDetailsModule
      ),
    canActivate: [AuthGuardFn],
  },

  {
    path: 'pay-after-placement',
    loadChildren: () =>
      import('./screens/pay-after-placement/pay-after-placement.module').then(
        (m) => m.PayAfterPlacementModule
      ),
    canActivate: [AuthGuardFn],
  },

  {
    path: 'terms-and-condition',
    loadChildren: () =>
      import('./screens/terms-and-conditions/terms-and-conditions.module').then(
        (m) => m.TermsAndConditionsModule
      ),
    canActivate: [AuthGuardFn],
  },

  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('./screens/privacy-policy/privacy-policy.module').then(
        (m) => m.PrivacyPolicyModule
      ),
    canActivate: [AuthGuardFn],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // console.log('NavigationEnd event:', event);
      }
    });
  }
}
