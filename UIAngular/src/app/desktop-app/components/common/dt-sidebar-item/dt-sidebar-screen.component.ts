import { Component, signal } from '@angular/core';
import { NavBarItems } from '../../../../Shared/Models/navbar';

@Component({
  selector: 'app-dt-sidebar-item',
  templateUrl: './dt-sidebar-screen.component.html',
  styleUrl: './dt-sidebar-screen.component.scss',
  standalone: false
})
export class DtSidebarItemComponent {
  navItems = NavBarItems;
  navSettings: {label: string; value: string;}[] = [
    { label: 'Help Center', value: 'HelpCenter' },
    { label: 'Settings', value: 'Settings' }
  ];

  OnClickSidebar(){
    alert('On Click SideBar');
  }
}
