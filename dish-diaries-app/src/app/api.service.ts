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

  addDish(dishName: string, chef: string, description: string, imageUrl: string, ingredients: string, instructions: string, dietaryPreferences: string, cookingTime: number, servings: number, cookingSkillLevel: string) {
    let url = `/api/dishes`;
    
    const ingredientsArr = ingredients.split('\n');
    const instructionsArr = instructions.split('\n');

    return this.http.post<Dish>(url, { dishName, chef, description, imageUrl, ingredients: ingredientsArr, instructions: instructionsArr, dietaryPreferences, cookingTime, servings, cookingSkillLevel });
  }
}
