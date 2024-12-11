import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { UserService } from '../../user/user.service';
import { ImageDirective } from '../../directives/image.directive';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, ImageDirective],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
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
export class AddComponent {
  constructor(private apiService: ApiService, private router: Router, private userService: UserService) { }

  isFieldEmpty(controlName: NgModel) {
    return controlName?.touched && controlName?.errors?.['required'];
  }

  isMinLengthValid(controlName: NgModel) {
    return controlName?.touched && controlName?.errors?.['minlength'];
  }

  isLessThanZero(controlName: NgModel) {
    return controlName?.touched && controlName?.value <= 0;
  }

  addDish(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { dishName, imageUrl, dietaryPreferences, description, ingredients, servings, cookingTime, cookingSkillLevel, instructions } = form.value;
    let chef: string;

    this.userService.getProfile().subscribe(currentUser => {
      chef = currentUser._id;

      this.apiService.addDish(dishName, chef, description, imageUrl, ingredients, instructions, dietaryPreferences, cookingTime, servings, cookingSkillLevel)
          .subscribe(() => {
            this.router.navigate(['/']);
          });
    });
  }
}
