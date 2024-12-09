import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<User | null>(null);
  private user$ = this.user$$.asObservable();

  USER_KEY = '[user]';
  user: User | null = null;

  constructor(private http: HttpClient) {
    this.user$.subscribe((user) => {
      this.user = user;
    });
   }

  login(email: string, password: string) {
    return this.http.post<User>('/api/users/login', { email, password })
    .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http.post('/api/users/logout', {})
    .pipe(tap((user) => this.user$$.next(null)));
  }

  register(email: string, password: string, chefName: string, favCuisine: string, cookingSkillLevel: string) {
    return this.http.post<User>('/api/users/register', { email, password, chefName, favCuisine, cookingSkillLevel})
    .pipe(
      tap((user) => this.user$$.next(user))
    );
  }

  getProfile() {
    return this.http.get<User>('/api/users/profile')
    .pipe(tap((user) => this.user$$.next(user)));
  }
}
