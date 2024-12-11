/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<User>('/api/users/login', { email, password }).pipe(
      tap((user) => {
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  logout() {
    return this.http.post('/api/users/logout', {}).pipe(
      tap(() => {
        localStorage.removeItem('user');
      })
    );
  }

  register(email: string, password: string, chefName: string, favCuisine: string, cookingSkillLevel: string) {
    return this.http.post<User>('/api/users/register', { email, password, chefName, favCuisine, cookingSkillLevel }).pipe(
      tap((user) => {
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  editProfile(userId: string | undefined, email: string, favCuisine: string, cookingSkillLevel: string) {
    return this.http.put<User>(`/api/users/${userId}`, { email, favCuisine, cookingSkillLevel }).pipe(
      tap((user) => {
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  getProfile() {
    return this.http.get<User>('/api/users/profile').pipe(
      tap((user) => {
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  getUserId(): string | undefined {
    const user = this.getUserFromLocalStorage();
    return user ? user._id : undefined;
  }

  private getUserFromLocalStorage(): User | null {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  get isLogged(): boolean {
    return !!this.getUserFromLocalStorage();
  }
}