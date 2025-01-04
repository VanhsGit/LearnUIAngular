import { Routes } from "@angular/router";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-fount.component";
import { routes as userRoutes } from "./users/users.route";
import { resolveUserName } from "./users/user-tasks/user-tasks.resolve";

export const routes: Routes = [
    {
        path:'',
        component: NoTaskComponent
    },
    {
        path: 'tasks/:userid',
        component: UserTasksComponent,
        children: userRoutes,
        runGuardsAndResolvers: 'always',
        data: {
            message: "Hello"
        },
        resolve: {
            username1: resolveUserName
        }
    },
    {
        path:'**',
        component: NotFoundComponent,
        title: "Not Found"
    }
]