import { Component, Input, input, output, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-learn-user-item',
  templateUrl: './learn-user-item.component.html',
  styleUrl: './learn-user-item.component.scss',
  standalone: false
})
export class LearnUserItemComponent {
    // @Input({required: true}) url!: string;
    // @Input({required: true }) name!: string;
    // @Input({required: true }) id!: number;
    url = input.required<string>();
    name = input.required<string>();
    id = input.required<number>();

    // @Output() gid = new EventEmitter<number>();
    gid = output<number>();


    getId(){
      this.gid.emit(this.id());
    }
 
}
