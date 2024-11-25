import { Component, output } from '@angular/core';
import { JobItemComponent } from './job-item/job-item.component';
import { Job } from '../../Shared/Models/Job.model';
import { JobsService } from './job.service';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  jobs?: Job[];

  idJob = output<number>();


  constructor(private jobService: JobsService){
    this.jobs = jobService.GetAll();
  }

  onClickJob(id: number){
    this.idJob.emit(id);
  }

}
