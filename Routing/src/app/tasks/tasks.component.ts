import { Component, computed, inject, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { Task } from './task/task.model';
import { TasksService } from './tasks.service';
import { ResolveFn, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, RouterLink],
})
export class TasksComponent {
  private taskService = inject(TasksService);
  order = input<'asc'|'desc'>('desc');
  userid = input<string>();
  userTasks = input.required<Task[]>();
  // userTasks = computed(
  //   () => this.taskService.allTasks().filter(x => x.userId === this.userid()).sort((a, b)=>{
  //     if(this.order() === 'desc'){
  //       return a.id > b.id ? -1: 1;
  //     } else {
  //       return a.id < b.id ? -1: 1;
  //     }
  //   })
  // );
}
export const resolveUserTasks: ResolveFn<Task[]> = (
  activatedRouteSnapshot,
  routerState
) => {
  const order = activatedRouteSnapshot.queryParams['order'];
  const tasksService = inject(TasksService);
  const tasks = tasksService
    .allTasks()
    .filter(
      (task) => task.userId === activatedRouteSnapshot.paramMap.get('userid')
    );

  if (order && order === 'asc') {
    tasks.sort((a, b) => (a.id > b.id ? 1 : -1));
  } else {
    tasks.sort((a, b) => (a.id > b.id ? -1 : 1));
  }

  return tasks.length ? tasks : [];
};