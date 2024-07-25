import { Routes } from '@angular/router';
import { AuthGuardFn } from './guards/auth.guard';
import { CourseDetailsComponent } from './screens/course-details/course-details.component';
import { HomeComponent } from './screens/home/home.component';
import { PayAfterPlacementComponent } from './screens/pay-after-placement/pay-after-placement.component';
import { TermsAndConditionsComponent } from './screens/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './screens/privacy-policy/privacy-policy.component';

export const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      canActivate: [AuthGuardFn],
    },
  
    {
      path: 'course-details/:courseName',
      component: CourseDetailsComponent,
      canActivate: [AuthGuardFn],
    },
  
    {
      path: 'pay-after-placement',
      component: PayAfterPlacementComponent,
      canActivate: [AuthGuardFn],
    },
  
    {
      path: 'terms-and-condition',
      component: TermsAndConditionsComponent,
      canActivate: [AuthGuardFn],
    },
  
    {
      path: 'privacy-policy',
      component: PrivacyPolicyComponent,
      canActivate: [AuthGuardFn],
    },
  ];