import { Component, OnInit } from '@angular/core';
import { Dish } from '../../types/dish';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { EditComponent } from '../edit/edit.component';
import { EditDishResult } from '../../types/edit-dish-result';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true, 
  imports: [EditComponent, DatePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  dish: Dish | null = null;
  errMsg: string | null = null;
  showEdit: boolean = false;
  showReactions: boolean = false;
  likes: number = 0;
  dislikes: number = 0;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private userService: UserService, private router: Router) { }

  get isLoggedIn() : boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.apiService.getSingleDish(id).subscribe(dish => {
      this.dish = dish;
      this.likes = this.dish.reactions.filter(r => r.status === 'liked').length;
      this.dislikes = this.dish.reactions.filter(r => r.status === 'disliked').length;
    });
  }

  get isOwner(): boolean {
    const userId = this.userService.getUserId();
    return this.dish?.chef?._id === userId;
  }

  get hasTried(): string | undefined {
    const userId = this.userService.getUserId();
    const reaction = this.dish?.reactions.find(r => r.user.toString() == userId);

    return reaction?.status; 
  }

  remove() {
    this.apiService.removeDish(this.dish?._id).subscribe({
      next: () => {
        this.router.navigate(['/list']);
      },
      error: (err) => {
        this.errMsg = err.error.message;
      }
    });
  }

  edit() {
    this.showEdit = !this.showEdit;
  }

  onFormSubmitted(event: EditDishResult) {
    this.showEdit = event.showEdit;
    this.dish = event.updatedDish; 
  }

  triedIt() {
    this.showReactions = !this.showReactions;
  }

  likedIt() {
    const dishId = this.dish?._id;
    const userId = this.userService.getUserId();

    this.apiService.triedDish(dishId, userId, 'liked').subscribe({
      next: (updatedDish) => {
        this.dish = updatedDish;
        this.showReactions = false;
      },
      error: (err) => {
        this.errMsg = err.error.message;
      }
    });
  }

  dislikedIt() {
    const dishId = this.dish?._id;
    const userId = this.userService.getUserId();

    this.apiService.triedDish(dishId, userId, 'disliked').subscribe({
      next: (updatedDish) => {
        this.dish = updatedDish;
        this.showReactions = false;
      },
      error: (err) => {
        this.errMsg = err.error.message;
      }
    });
  }  
}
