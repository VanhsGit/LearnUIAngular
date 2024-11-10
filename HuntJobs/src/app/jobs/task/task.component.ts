import { Component } from '@angular/core';
import { TaskItemComponent } from './task-item/task-item.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TaskItemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {

}
