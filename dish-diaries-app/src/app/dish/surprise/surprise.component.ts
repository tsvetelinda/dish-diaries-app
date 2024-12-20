import { Component, OnInit } from '@angular/core';
import { SingleCardComponent } from '../single-card/single-card.component';
import { Dish } from '../../types/dish';
import { ApiService } from '../../api.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-surprise',
  standalone: true,
  imports: [SingleCardComponent],
  templateUrl: './surprise.component.html',
  styleUrl: './surprise.component.css',
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
export class SurpriseComponent implements OnInit {
  randomDish : Dish | undefined = undefined;
  dishes: Dish[] = [];
  randomIndex: number = 0;
  likes: number = 0;
  dislikes: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDishes().subscribe(dishes => {
      this.dishes = dishes;

      this.randomIndex = Math.floor(Math.random() * dishes.length);
      this.randomDish = this.dishes[this.randomIndex];
      this.likes = this.randomDish.reactions.filter(r => r.status === 'liked').length;
      this.dislikes = this.randomDish.reactions.filter(r => r.status === 'disliked').length;
    })
  }
}
