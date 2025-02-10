import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Dish } from '../../types/dish';
import { SingleCardComponent } from '../single-card/single-card.component';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [SingleCardComponent, LoaderComponent],
  templateUrl: './list.component.html', 
  styleUrl: './list.component.css',
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
export class ListComponent implements OnInit {
  dishes: Dish[] = [];
  isLoading = true;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDishes().subscribe(dishes => {
      this.dishes = dishes;
      this.isLoading = false;
    });
  }
}
