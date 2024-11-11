import { Component, input } from '@angular/core';
import { Job } from '../../../Shared/Models/Job.model';

@Component({
  selector: 'app-job-item',
  standalone: true,
  imports: [],
  templateUrl: './job-item.component.html',
  styleUrl: './job-item.component.scss'
})
export class JobItemComponent {
  jobDetail = input.required<Job>();
  
}
