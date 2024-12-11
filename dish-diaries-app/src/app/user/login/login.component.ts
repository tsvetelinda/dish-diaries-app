import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
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
export class LoginComponent {
  errMsg: string | null = null;

  constructor(private userService: UserService, private router: Router) { }

  isFieldEmpty(controlName: NgModel) {
    return controlName?.touched && controlName?.errors?.['required'];
  }

  login(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe({
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
