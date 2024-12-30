import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

// @Injectable({
//     providedIn: 'root'
// })
export class TaskService{
    Tasks = signal<Task[]>([]);
    allTasks = this.Tasks.asReadonly();

    addTask(input: {title: string, description: string}){
        const newTask : Task =  {
            ...input,
            id: Math.random.toString(),
            status: 'OPEN'
        }

        this.Tasks.update((old) => [...old, newTask]);
    }
}       