import { Component, OnInit } from '@angular/core';
import { Dish } from '../../types/dish';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { EditComponent } from '../edit/edit.component';
import { EditDishResult } from '../../types/edit-dish-result';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { UserForAuth } from '../../types/user';
import { ElapsedTimePipe } from '../../pipes/elapsed-time.pipe';

@Component({
  selector: 'app-details',
  standalone: true, 
  imports: [EditComponent, ElapsedTimePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition('void => *', [
        style({ opacity: 0 }), 
        animate('900ms 500ms', style({ opacity: 1 }))
      ]),
      transition('* => void', [
        animate('900ms', style({ opacity: 0 }))
      ]),
    ]),
  ]
})
export class DetailsComponent implements OnInit {
  dish: Dish | null = null;
  errMsg: string | null = null;
  showEdit: boolean = false;
  showReactions: boolean = false;
  likes: number = 0;
  dislikes: number = 0;
  currentUser: UserForAuth | null = null;

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

    this.userService.getProfile().subscribe(user => {
      this.currentUser = user;
    })
  }

  get isOwner(): boolean {
    return this.dish?.chef?._id === this.currentUser?._id;
  }

  get hasTried(): string | undefined {
    const reaction = this.dish?.reactions.find(r => r.user.toString() == this.currentUser?._id);
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

    this.apiService.triedDish(dishId, this.currentUser?._id, 'liked').subscribe({
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

    this.apiService.triedDish(dishId, this.currentUser?._id, 'disliked').subscribe({
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
