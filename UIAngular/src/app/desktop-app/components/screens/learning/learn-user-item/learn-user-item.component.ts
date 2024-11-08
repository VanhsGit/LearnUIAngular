import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-learn-user-item',
  templateUrl: './learn-user-item.component.html',
  styleUrl: './learn-user-item.component.scss'
})
export class LearnUserItemComponent {
    // @Input({required: true}) url!: string;
    // @Input({required: true }) name!: string;
    url = input.required<string>();
    name = input.required<string>();
}
