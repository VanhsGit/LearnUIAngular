import { Component, ViewEncapsulation } from '@angular/core';
import { SearchBarComponent } from '../../../shared/search-bar/search-bar.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchBarComponent, ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.Emulated
})
export class HeaderComponent {

}
