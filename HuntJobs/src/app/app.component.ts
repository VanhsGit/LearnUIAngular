import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { JobsComponent } from './jobs/jobs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SidebarComponent, JobsComponent], // RouterOutlet, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HuntJobs';
}
