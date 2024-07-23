import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { WhatWeOfferComponent } from './components/what-we-offer/what-we-offer.component';
import { ExpertsTeamComponent } from './components/experts-team/experts-team.component';
import { CoursesComponent } from './components/courses/courses.component';
import { JobPlacementsComponent } from './components/job-placements/job-placements.component';
import { PlacementSupportComponent } from './components/placement-support/placement-support.component';
import { FaqComponent } from './components/faq/faq.component';
import { AchievementsComponent } from './components/achievements/achievements.component';

@NgModule({
  declarations: [
    HomeComponent,
    TestimonialComponent,
    WhatWeOfferComponent,
    ExpertsTeamComponent,
    CoursesComponent,
    JobPlacementsComponent,
    PlacementSupportComponent,
    FaqComponent,
    AchievementsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [TestimonialComponent],
})
export class HomeModule {}
