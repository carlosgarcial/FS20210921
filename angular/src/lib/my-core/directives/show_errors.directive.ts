import { Directive, ElementRef, forwardRef, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import validatorjs from 'validator';

export function LowercaseValidation(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) { return null; }
    return control.value === control.value.toLowerCase() ? null : { lowercase: 'Tiene que estar en minusculas' }
  };
}

@Directive({
  selector: '[lowercase]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LowercaseValidator, multi: true }]
})
export class LowercaseValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return LowercaseValidation()(control);
  }
}

@Directive({
  selector: '[minlength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinLengthValidator, multi: true }]
})

export class MinLengthValidator implements Validator {
  @Input('minlength') min:number= 0;
  validate(control: AbstractControl): { [key: string]: any } {
    if (!this.min) {
      throw new Error('Tiene que tener al menos 2 letras.');
    }
    return Validators.minLength(this.min);
}

}

export const VALIDADORES_ERROR_MESSAGE = [LowercaseValidator,]


