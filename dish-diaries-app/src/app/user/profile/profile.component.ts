import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User, UserForAuth } from '../../types/user';
import { Dish } from '../../types/dish';
import { ApiService } from '../../api.service';
import { SingleCardComponent } from '../../dish/single-card/single-card.component';
import { Router, RouterLink } from '@angular/router';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { EmailDirective } from '../../directives/email.directive';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [SingleCardComponent, RouterLink, FormsModule, EmailDirective, LoaderComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css', 
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
export class ProfileComponent implements OnInit {
  user: UserForAuth | null = null;
  dishes: Dish[] = [];
  showEditForm: boolean = false;
  errMsg: string | null = null;
  isLoadingRecipes: boolean = true;
  
  constructor(private userService: UserService, private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getProfile().subscribe({
      next: (profile) => {
        this.user = profile;

        this.apiService.getDishes().subscribe({
          next: (dishes) => {
            this.dishes = dishes.filter(dish => dish.chef.toString() === this.user?._id);
            this.isLoadingRecipes = false;
          },
          error: (err) => {
            console.log(err.error.message);
          }
        });
      },
      error: (err) => {
        console.log(err.error.message);
      }
    });
  }

  edit() {
    this.showEditForm = !this.showEditForm;
  }

  isFieldEmpty(controlName: NgModel) {
    return controlName?.touched && controlName?.errors?.['required'];
  }

  isMinLengthValid(controlName: NgModel) {
    return controlName?.touched && controlName?.errors?.['minlength'];
  }

  editProfile(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, favCuisine, cookingSkillLevel } = form.value;
    const userId = this.user?._id;

    this.userService.editProfile(userId, email, favCuisine, cookingSkillLevel).subscribe({
      next: (updatedUser) => {
        this.user = updatedUser;
        this.showEditForm = false;
      },
      error: (err) => {
        this.errMsg = err.error.message;
        form.reset();
      }
    });
  }
}
