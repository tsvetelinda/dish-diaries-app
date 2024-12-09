import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dish } from './types/dish';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getDishes() {
    let url = `/api/dishes`;

    return this.http.get<Dish[]>(url);
  }

  getSingleDish(dishId: string) {
    let url = `/api/dishes/${dishId}`;

    return this.http.get<Dish>(url);
  }

  addDish(dishName: string, imageUrl: string, dietaryPreferences: string, description: string, 
    ingredients: string, servings: number, cookingTime: number, cookingSkillLevel: string, instructions: string
  ) {
    let url = `/api/dishes`;
    
    const ingredientsArr = ingredients.split('\n');
    const instructionsArr = instructions.split('\n');

    console.log(dishName);
    console.log(imageUrl);
    console.log(dietaryPreferences);
    console.log(description);
    console.log(ingredientsArr);
    console.log(servings);
    console.log(cookingTime);
    console.log(cookingSkillLevel);
    console.log(instructionsArr);

    return this.http.post<Dish>(url, {dishName, imageUrl, dietaryPreferences, description, ingredients: ingredientsArr, servings, cookingTime, cookingSkillLevel, instructions: instructionsArr});
  }
}
