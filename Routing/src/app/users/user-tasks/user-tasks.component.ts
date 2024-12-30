import { Component, computed, inject, input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterModule]
})
export class UserTasksComponent {
  userid = input.required<string>();
  private userSerivce = inject(UsersService);

  userName = computed(
    () => this.userSerivce.users.find(u => u.id === this.userid())?.name
  );
}
