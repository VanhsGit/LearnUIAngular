import { Component } from '@angular/core';
import { JobItemComponent } from './job-item/job-item.component';

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [JobItemComponent],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  
}
