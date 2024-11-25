import { Component, input, output } from '@angular/core';
import { JobComponent } from "./job/job.component";
import { DJobsComponent } from './djobs/djobs.component';
import { JobItem } from '../Shared/Models/JobItem.model';
import { JobItemService } from './job/job-item/job-item.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  idSelected?: number;

  SelectUser(id: number){
    this.idSelected = id;
  }

  constructor(private jobitemService: JobItemService){}

  get gIdSelect(){
    return this.jobitemService.GetSingle(this.idSelected);
  }
}
