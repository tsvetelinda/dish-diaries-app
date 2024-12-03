import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  isFieldEmpty(controlName: NgModel) {
    return controlName?.touched && controlName?.errors?.['required'];
  }

  isMinLengthValid(controlName: NgModel) {
    return controlName?.touched && controlName?.errors?.['minlength'];
  }

  addDish(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form);
  }
}
