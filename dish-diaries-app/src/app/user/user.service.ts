import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<User | undefined>(undefined);
  private user$ = this.user$$.asObservable();

  USER_KEY = '[user]';
  user: User | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch(error) {
      this.user = null;
    }
  }

  login(email: string, password: string) {
    return this.http.post<User>('/api/users/login', { email, password })
    .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    this.user = null;
    localStorage.removeItem(this.USER_KEY);
  }

  register(email: string, password: string, chefName: string, favCuisine: string, cookingSkillLevel: string) {
    return this.http.post<User>('/api/users/register', { email, password, chefName, favCuisine, cookingSkillLevel})
    .pipe(tap((user) => this.user$$.next(user)));
  }

  getProfile() {
    return this.http.get<User>('/api/users/profile')
    .pipe(tap((user) => this.user$$.next(user)));
  }
}
