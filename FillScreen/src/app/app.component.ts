import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './Components/body/body.component';
import { FilterComponent } from './Components/filter/filter.component';
import { HeaderComponent } from './Components/header/header.component';
import { LogoComponent } from "./Components/logo/logo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BodyComponent, FilterComponent, HeaderComponent, LogoComponent, LogoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FillScreen';
}
