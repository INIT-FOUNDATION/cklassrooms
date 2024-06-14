import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayAfterPlacementRoutingModule } from './pay-after-placement-routing.module';
import { PayAfterPlacementComponent } from './pay-after-placement.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HomeModule } from '../home/home.module';

@NgModule({
  declarations: [PayAfterPlacementComponent],
  imports: [
    CommonModule,
    PayAfterPlacementRoutingModule,
    SharedModule,
    HomeModule,
  ],
})
export class PayAfterPlacementModule {}
