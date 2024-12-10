import { Component, OnInit } from '@angular/core';
import { Dish } from '../../types/dish';
import { ApiService } from '../../api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { EditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-details',
  standalone: true, 
  imports: [EditComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
  dish: Dish | null = null;
  errMsg: string | null = null;
  showEdit: boolean = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private userService: UserService, private router: Router) { }

  get isLoggedIn() : boolean {
    return this.userService.isLogged;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.apiService.getSingleDish(id).subscribe(dish => {
      this.dish = dish;
    });
  }

  get isOwner(): boolean {
    return this.dish?.chef._id === this.userService.getUserId();
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
}
