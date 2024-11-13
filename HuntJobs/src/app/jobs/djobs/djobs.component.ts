import { Component, input } from '@angular/core';
import { JobItem } from '../../Shared/Models/JobItem.model';
import { JobItemService } from '../job/job-item/job-item.service';

@Component({
  selector: 'app-djobs',
  standalone: true,
  imports: [],
  templateUrl: './djobs.component.html',
  styleUrl: './djobs.component.scss'
})
export class DJobsComponent {
  djobsDetail = input.required<JobItem>();
}
