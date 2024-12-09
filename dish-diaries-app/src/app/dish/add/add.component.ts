import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  constructor(private apiService: ApiService, private router: Router) { }

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

    

    const { dishName, imageUrl, dietaryPreferences, description, ingredients, servings, cookingTime, cookingSkillLevel, instructions } = form.value;
    const chef = null;

    this.apiService.addDish(dishName, imageUrl, dietaryPreferences, description, ingredients, servings, cookingTime, cookingSkillLevel, instructions).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
