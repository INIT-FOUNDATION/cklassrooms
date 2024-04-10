import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { LoaderComponent } from './components/loader/loader.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';

const MY_FORMATS = {
  parse: {
    dateInput: 'DD-MM-YYYY',
  },
  display: {
    dateInput: 'DD-MM-YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

const export_components = [LoaderComponent, HeaderComponent];

const export_material_modules = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule,
  MatIconModule,
];

@NgModule({
  declarations: [...export_components],
  imports: [
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    ...export_material_modules,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    NgxSpinnerModule,
    ...export_components,
    ...export_material_modules,
  ],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
})
export class SharedModule {}
