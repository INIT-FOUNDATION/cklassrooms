import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { StarRatingModule } from 'angular-star-rating';
import { FormsModule } from '@angular/forms';
import {PopoverModule} from "ngx-smart-popover";
import { TestimonialComponent } from './components/testimonial/testimonial.component';

@NgModule({
  declarations: [
    HomeComponent,
    TestimonialComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule,
    StarRatingModule.forRoot()
  ]
})
export class HomeModule { }
