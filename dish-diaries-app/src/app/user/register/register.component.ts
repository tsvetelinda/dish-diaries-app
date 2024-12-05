import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private userService: UserService, private router: Router) { }

  register(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const {email, passGroup: {password} = {}, chefName, favCuisine, cookingSkillLevel } = form.value;

    this.userService.register(email!, password!, chefName!, favCuisine!, cookingSkillLevel!).subscribe(() => {
      this.router.navigate(['/home']);
    });
  }
}
