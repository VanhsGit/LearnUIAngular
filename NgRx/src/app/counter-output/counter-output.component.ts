import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { selectCount } from '../store/count.selector';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
  standalone: true,
  imports: [AsyncPipe]
})
export class CounterOutputComponent {
  count$: Observable<number>;
  constructor(private store: Store<{counter: number}>) {
    this.count$ = store.select(selectCount);
  }

}