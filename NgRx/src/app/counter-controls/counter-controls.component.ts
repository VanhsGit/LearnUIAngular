import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementAction } from '../store/counter.action';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(new IncrementAction(2));
  }

  decrement() {
    
  }
}