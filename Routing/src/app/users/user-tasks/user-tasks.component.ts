import { Component, computed, DestroyRef, inject, input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
  imports: [RouterModule]
})
export class UserTasksComponent implements OnInit{
  username1 = input.required<string>();
  userid = input.required<string>();
  message = input.required<string>();
  private activedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    const subscription = this.activedRoute.data.subscribe({
      next: (data)=> {
        console.log(data);
      }
    });
  }
  // private userSerivce = inject(UsersService);
  // ngOnInit(): void {
  //   console.log(this.message + "asdsad");
  //   console.log(this.activedRoute);
  //   console.log(this.activedRoute.paramMap);
  //   console.log(this.activedRoute.snapshot.paramMap.get('userid'));
  //   const subscription = this.activedRoute.paramMap.subscribe({
  //     next: (paraMap) => {
  //       this.username1 = this.userSerivce.users.find((u) => u.id === paraMap.get('userid'))?.name || '';
  //     }
  //   })
  // }


  // userName = computed(
  //   () => this.userSerivce.users.find(u => u.id === this.userid())?.name
  // );
}
