import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { User, UserForAuth } from '../types/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<UserForAuth | null>(null);
  private user$ = this.user$$.asObservable();

  USER_KEY = '[user]';
  user: UserForAuth | null = null;

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) {
    this.user$.subscribe((user) => this.user = user);
  }

  register(email: string, password: string, chefName: string, favCuisine: string, cookingSkillLevel: string) {
    return this.http.post<UserForAuth>('/api/register', { email, password, chefName, favCuisine, cookingSkillLevel })
    .pipe(tap((user) => this.user$$.next(user)));
  }

  login(email: string, password: string) {
    return this.http.post<UserForAuth>('/api/login', { email, password })
    .pipe(tap((user) => this.user$$.next(user)));
  }

  getProfile() {
    return this.http.get<UserForAuth>('/api/users/profile')
    .pipe(tap((user) => this.user$$.next(user)));
  }

  logout() {
    return this.http.post('/api/logout', {})
    .pipe(tap(() => this.user$$.next(null)));
  }

  /*
  editProfile(userId: string | undefined, email: string, favCuisine: string, cookingSkillLevel: string) {
    return this.http.put<User>(`/api/users/${userId}`, { email, favCuisine, cookingSkillLevel }).pipe(
      tap((user) => {
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }*/
}