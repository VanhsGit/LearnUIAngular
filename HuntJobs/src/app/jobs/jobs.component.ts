import { Component, input, output } from '@angular/core';
import { JobComponent } from "./job/job.component";
import { DJobsComponent } from './djobs/djobs.component';
import { JobItem } from '../Shared/Models/JobItem.model';

@Component({
  selector: 'app-jobs',
  standalone: true,
  imports: [JobComponent, DJobsComponent],
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss'
})
export class JobsComponent {
  dJobs? : JobItem;
  idSelected = input<number>();

  get gIdSelected(): number | undefined {
    return this.idSelected();
  }

}
