import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { imageValidator } from '../utils/image.validator';

@Directive({
  selector: '[appImage]',
  standalone: true,
  providers: [{
    provide: NG_VALIDATORS,
    multi: true,
    useExisting: ImageDirective
  }]
})
export class ImageDirective {
  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const validatorFn = imageValidator();
    
    return validatorFn(control);
  }
}
