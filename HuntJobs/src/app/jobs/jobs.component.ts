import { Component } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { JobComponent } from "./job/job.component";

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [TaskComponent, JobComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {

}
