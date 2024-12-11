import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';
import { ProfileComponent } from '../user/profile/profile.component';
import { User } from '../types/user';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProfileComponent], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translate(-50%, 100%)' }),
        animate('900ms 800ms'),
      ]),
      transition('* => void', [
        animate(900, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ]
  
})
export class HomeComponent {
  user: User | null = null;
  
  constructor(private userService: UserService) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }
}
