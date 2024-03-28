import { ImageCropperModule } from 'ngx-image-cropper';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*Material Modules*/
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatIconModule } from '@angular/material/icon';
import { ChartsModule } from 'ng2-charts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

import { NgxSpinnerModule } from 'ngx-spinner';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

/*Material Modules*/

/*Directives*/
import { IntegerInputDirective } from './directives/input-integer.directive';
import { MobileNumberDirective } from './directives/mobile-number.directive';
import { InputCharDirective } from './directives/input-char.directive';
import { InputTrimDirective } from './directives/input-trim.directive';
import { MinDirective } from './directives/min.directive';
import { MaxDirective } from './directives/max.directive';
import { RangeDirective } from './directives/range.directive';
import { RangeLengthDirective } from './directives/range-length.directive';
import { MaskInputDirective } from './directives/mask-input.directive';
import { MatTableModule } from '@angular/material/table';
/*Directives*/

import { ToastrModule } from 'ngx-toastr';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { LoaderComponent } from './components/loader/loader.component';
import { DndDirective } from './directives/dnd.directive';
import { CountryCodePipe } from './pipes/country-code.pipe';
import { PhoneNumberDirective } from './directives/phone-number.directive';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NumberFormatterKPipe } from './pipes/number-formatter-k.pipe';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { AssignRandomColorPipe } from './pipes/assign-random-color.pipe';
import { BootstrapGridColPipe } from './pipes/bootstrap-grid-col.pipe';
import { ExactParticipantsCountPipe } from './pipes/exact-participants-count.pipe';
import { HideShowVideoCardPipe } from './pipes/hide-show-video-card.pipe';
import { NameInitialsPipe } from './pipes/name-initials.pipe';
import { VcActionIconsPipe } from './pipes/vc-action-icons.pipe';
import { InputTitleCaseDirective } from './directives/input-title-case.directive';
import { OtpNumberDirective } from './directives/otp-number.directive';
import { PackagePricePipe } from './pipes/package-price.pipe';
import { CountryNamePipe } from './pipes/country-name.pipe';


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

const export_components = [
  LoaderComponent
];

const export_directives = [
  IntegerInputDirective,
  MobileNumberDirective,
  InputCharDirective,
  InputTrimDirective,
  MinDirective,
  MaxDirective,
  RangeDirective,
  RangeLengthDirective,
  MaskInputDirective,
  DndDirective,
  PhoneNumberDirective,
  InputTitleCaseDirective,
  OtpNumberDirective,
];

const export_pipes = [
  CountryCodePipe,
  NumberFormatterKPipe,
  NameInitialsPipe,
  VcActionIconsPipe,
  HideShowVideoCardPipe,
  ExactParticipantsCountPipe,
  BootstrapGridColPipe,
  AssignRandomColorPipe,
  PackagePricePipe,
  CountryNamePipe,
];

const export_material_modules = [
  MatDialogModule,
  MatButtonModule,
  ClipboardModule,
  MatIconModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatMomentDateModule,
  MatInputModule,
  MatAutocompleteModule,
  RouterModule,
  MatMenuModule,
  MatTooltipModule,
  MatSelectModule,
  ImageCropperModule,
  MatTableModule,
  MatPaginatorModule,
  MatListModule,
  MatTabsModule,
  VgCoreModule,
  VgControlsModule,
  VgOverlayPlayModule,
  VgBufferingModule,
  PickerModule,
  MatExpansionModule,

  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [...export_components, ...export_directives, ...export_pipes],
  imports: [
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    ...export_material_modules
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ToastrModule,
    NgxSpinnerModule,
    ...export_components,
    ...export_material_modules,
    ...export_directives,
    ...export_pipes
  ],
  providers: [{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS }],
})
export class SharedModule {}
