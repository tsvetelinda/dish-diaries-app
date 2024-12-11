import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { EmailDirective } from '../../directives/email.directive';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule, EmailDirective],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }), 
        animate('900ms 500ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('900ms', style({ opacity: 0 }))
      ]),
    ]),
  ]
})
export class RegisterComponent {
  errMsg: string | null = null;

  constructor(private userService: UserService, private router: Router) { }

  isFieldEmpty(controlName: NgModel) {
    return controlName?.touched && controlName?.errors?.['required'];
  }

  isMinLengthValid(controlName: NgModel) {
    return controlName?.touched && controlName?.errors?.['minlength'];
  }

  doPasswordsMatch(password: NgModel, rePassword: NgModel) {
    return password?.control?.value === rePassword?.control?.value;
  }

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password, chefName, favCuisine, cookingSkillLevel } = form.value;

    this.userService.register(email, password, chefName, favCuisine, cookingSkillLevel).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.errMsg = err.error.message;
        form.reset();
      }
    });
  }
}
