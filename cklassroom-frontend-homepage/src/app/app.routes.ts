import { Routes } from '@angular/router';
import { AuthGuardFn } from './guards/auth.guard';

export const routes: Routes = [
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