import { Component } from '@angular/core';
import { SingleCardComponent } from "../single-card/single-card.component";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { Dish } from '../../types/dish';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [SingleCardComponent, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  dishes: Dish[] = [];
  errMsg: string | null = null;

  constructor(private apiService: ApiService) { }

  search(form: NgForm) {
    const { dietaryPreferences, cookingSkillLevel, cookingTime } = form.value;

    this.apiService.getDishes().subscribe({
      next: (dishes) => {
        this.dishes = dishes.filter(dish => (!dietaryPreferences || dish.dietaryPreferences === dietaryPreferences) &&
        (!cookingSkillLevel || dish.cookingSkillLevel === cookingSkillLevel) &&
      (!cookingTime || dish.cookingTime <= cookingTime)); 
        console.log(this.dishes);
      },
      error: (err) => {
        this.errMsg = err.error.message;
      }
    });
  }
}
