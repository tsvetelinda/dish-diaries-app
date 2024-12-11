import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
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
export class ErrorComponent {

}
