import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayAfterPlacementComponent } from './pay-after-placement.component';

const routes: Routes = [
  {path: '', component: PayAfterPlacementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayAfterPlacementRoutingModule { }
