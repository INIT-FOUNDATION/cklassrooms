import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayAfterPlacementRoutingModule } from './pay-after-placement-routing.module';
import { PayAfterPlacementComponent } from './pay-after-placement.component';


@NgModule({
  declarations: [PayAfterPlacementComponent],
  imports: [
    CommonModule,
    PayAfterPlacementRoutingModule
  ]
})
export class PayAfterPlacementModule { }
