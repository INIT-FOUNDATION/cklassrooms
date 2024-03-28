import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidatorFn } from '@angular/forms';
import { PhoneNumberUtil, PhoneNumber } from 'google-libphonenumber';

const phoneNumberUtil = PhoneNumberUtil.getInstance();


@Directive({
  selector: '[appPhonenumber]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PhoneNumberDirective, multi: true }]
})
export class PhoneNumberDirective {

  @Input('appPhonenumber') countryCode: string;

  validate(control: AbstractControl): { [key: string]: any } | null {
    return this.countryCode ? this.phoneNumberValidator(this.countryCode)(control) : null;
  }

  phoneNumberValidator(countryCode: string): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (control && (control.value === '' || control.value === null || control.value === undefined)) {
        return null;
      }

      let validNumber = false;
      try {
        const phoneNumber = phoneNumberUtil.parseAndKeepRawInput(
          control.value, countryCode
        );
        validNumber = phoneNumberUtil.isValidNumber(phoneNumber);
      } catch (e) { }

      return validNumber ? null : { 'wrongNumber': { value: control.value } };
    };
  }

}
