import { Component } from '@angular/core';
import { SidebarService } from './sidebar.service';
import { Sidebar } from '../Shared/Models/SideBar.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  lTitle: string = 'Hunt';
  rTitle: string = 'Jobs';
  userName: string = 'Ng.vanh';
  position: string = 'IT Developer';

  sidebars: Sidebar[];

  constructor(private _sidebarService: SidebarService){
    this.sidebars = _sidebarService.GetAll();
  }

}
