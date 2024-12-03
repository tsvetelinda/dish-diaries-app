import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Dish } from '../../types/dish';
import { SingleCardComponent } from '../single-card/single-card.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [SingleCardComponent],
  templateUrl: './list.component.html', 
  styleUrl: './list.component.css'
}) 
export class ListComponent implements OnInit {
  dishes: Dish[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDishes().subscribe(dishes => {
      this.dishes = dishes;
    });
  }
}
