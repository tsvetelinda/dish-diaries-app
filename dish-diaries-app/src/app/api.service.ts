import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment.development';
import { Dish } from './types/dish';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }

  getDishes() {
    const { apiUrl } = environment;
    let url = `${apiUrl}/dishes`;

    return this.http.get<Dish[]>(url);
  }

  getSingleDish(dishId: string) {
    const { apiUrl } = environment;
    let url = `${apiUrl}/dishes/${dishId}`;

    return this.http.get<Dish>(url);
  }
}
