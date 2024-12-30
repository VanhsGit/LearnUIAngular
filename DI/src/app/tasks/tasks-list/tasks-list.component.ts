import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  tService = inject(TaskService);
  private selectedFilter = signal<string>('all');

  tasks = computed(()=>{
    switch(this.selectedFilter()){
      case 'all':
        return this.tService.allTasks();
      case 'open':
          return this.tService.allTasks().filter((task) => task.status === 'OPEN');
      case 'in-progress':
        return this.tService.allTasks().filter((task) => task.status === 'IN_PROGRESS');
      case 'done':
          return this.tService.allTasks().filter((task) => task.status === 'DONE');
      default: return this.tService.allTasks();
    }
  });
  
  onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter);
  }
}
