import { Component, Input } from '@angular/core';
import { Dish } from '../../types/dish';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './single-card.component.html',
  styleUrl: './single-card.component.css'
})
export class SingleCardComponent {
  @Input() dish: Dish | undefined = undefined;
}
