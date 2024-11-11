import { Component } from '@angular/core';
import { JobItemComponent } from './job-item/job-item.component';
import { Job } from '../../Shared/Models/Job.model';
import { JobsService } from './job.service';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [JobItemComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  jobs?: Job[];

  constructor(private jobService: JobsService){
    this.jobs = jobService.GetAll();
  }
}
