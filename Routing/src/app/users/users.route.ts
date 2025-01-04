import { CanDeactivateFn, CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';

import { resolveUserTasks, TasksComponent } from '../tasks/tasks.component';
import { NewTaskComponent } from '../tasks/new-task/new-task.component';
import { resolveTitle } from './user-tasks/user-tasks.resolve';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segments) => {
    const router = inject(Router);
    const shouldGetAccess = Math.random();
    if(shouldGetAccess < 1){
        return true;
    } 
    return new RedirectCommand(router.parseUrl('/unauthorized'));
}

export const notiLeavePage: CanDeactivateFn<NewTaskComponent> = (component) => {
    if(component.submitted()){
        return true;
    }
    if(component.enteredDate() || component.enteredSummary() || component.enteredTitle()){
       return window.confirm("do you really want to leave?");
    }
    return true;
}

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'task',
    pathMatch: 'full',
  },
  {
    path: 'task', // <your-domain>/users/<uid>/tasks
    component: TasksComponent,
    canMatch: [dummyCanMatch],
    runGuardsAndResolvers: 'always',
    resolve: {
        userTasks: resolveUserTasks
    },
    title: resolveTitle
    
  },
  {
    path: 'task/new',
    component: NewTaskComponent,
    canDeactivate: [notiLeavePage]
  },
];

