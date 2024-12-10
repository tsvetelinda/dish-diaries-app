import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Dish } from '../../types/dish';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ApiService } from '../../api.service';
import { EditDishResult } from '../../types/edit-dish-result';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  @Input() dish: Dish | null = null;
  @Output() formSubmitted = new EventEmitter<EditDishResult>();

  errMsg: string | null = null;

  constructor(private apiService: ApiService) { }

  isFieldEmpty(controlName: NgModel) {
    return controlName?.touched && controlName?.errors?.['required'];
  }

  isMinLengthValid(controlName: NgModel) {
    return controlName?.touched && controlName?.errors?.['minlength'];
  }
  
  editDish(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { dishName, chef, imageUrl, dietaryPreferences, description, ingredients, servings, cookingTime, cookingSkillLevel, instructions } = form.value;

    this.apiService.editDish(this.dish?._id, dishName, chef, description, imageUrl, ingredients, instructions, dietaryPreferences, cookingTime, servings, cookingSkillLevel).subscribe({
      next: (updatedDish) => {
        this.dish = updatedDish;
        this.formSubmitted.emit({
          showEdit: false, 
          updatedDish
        }); 
      },
      error: (err) => {
        this.errMsg = err.error.message;
      }
    });
  }
}
