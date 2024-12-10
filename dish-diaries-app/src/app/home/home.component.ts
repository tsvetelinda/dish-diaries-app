import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';
import { ProfileComponent } from '../user/profile/profile.component';
import { User } from '../types/user';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProfileComponent], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css' 
})
export class HomeComponent {
  user: User | null = null;
  
  constructor(private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
}
