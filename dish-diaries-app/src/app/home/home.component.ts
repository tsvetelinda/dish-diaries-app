import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../user/user.service';
import { ProfileComponent } from '../user/profile/profile.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UserForAuth } from '../types/user';

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

export class HomeComponent implements OnInit {  
  user: UserForAuth | null = null;
  isLoggedIn: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: (profile) => {
        this.user = profile;
        this.isLoggedIn = true;
      },
      error: (err) => {
        console.log(err.error.message);
      }
    });
  }
}
