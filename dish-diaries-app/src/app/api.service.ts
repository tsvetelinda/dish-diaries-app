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
}
