import { CanDeactivateFn, Routes } from '@angular/router';
import { NewTaskComponent } from '../tasks/new-task/new-task.component';
import { TaskComponent } from '../tasks/task/task.component';
import { resolveUserTasks } from './users.component';
import { UsersService } from './users.service';

const canLeaveEditPage: CanDeactivateFn<NewTaskComponent> = (component) => {
  if (component.submitted) {
    return true;
  }
  if (component.enteredTitle() || component.enteredDate() || component.enteredSummary()) {
    return window.confirm('Do you really want to leave? You will lose the entered data.')
  }
  return true;
}

export const routes: Routes = [
  {
    path: '',
    providers: [UsersService],
  },
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full',
  },
  {
    path: 'tasks',
    component: TaskComponent,
    runGuardsAndResolvers: 'always',
    resolve: {
      userTasks: resolveUserTasks,
    },
  },
  {
    path: 'tasks/new',
    loadComponent: () => import('../tasks/new-task/new-task.component').then(mod => mod.NewTaskComponent),
    canDeactivate: [canLeaveEditPage]
  },
];
