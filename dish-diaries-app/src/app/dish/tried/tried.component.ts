import { Component, OnInit } from '@angular/core';
import { Dish } from '../../types/dish';
import { ApiService } from '../../api.service';
import { SingleCardComponent } from '../single-card/single-card.component';
import { UserService } from '../../user/user.service';
import { User } from '../../types/user';

@Component({
  selector: 'app-tried',
  standalone: true,
  imports: [SingleCardComponent],
  templateUrl: './tried.component.html',
  styleUrl: './tried.component.css'
})
export class TriedComponent implements OnInit {
  user: User | null = null;
  dishes: Dish[] = [];
  liked: Dish[] = [];
  disliked: Dish[] = [];

  constructor(private apiService: ApiService, private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: (profile) => {
        this.user = profile;
      },
      error: (err) => {
        console.log(err.error.message);
      }
    });
    
    this.apiService.getDishes().subscribe({
      next: (dishes) => {
        this.liked = dishes.filter(dish => 
          dish.reactions.some(r => r.status === 'liked' && r.user.toString() === this.user?._id));
        this.disliked = dishes.filter(dish => 
          dish.reactions.some(r => r.status === 'disliked' && r.user.toString() === this.user?._id));
      },
      error: (err) => {
        console.log(err.error.message);
      }
    });
  }
}
