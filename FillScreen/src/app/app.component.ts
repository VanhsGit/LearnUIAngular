import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodyComponent } from './Components/body/body.component';
import { FilterComponent } from './Components/filter/filter.component';
import { HeaderComponent } from './Components/header/header.component';
import { LogoComponent } from "./Components/logo/logo.component";
import { TipeComponent } from "./Components/filter/tipe/tipe.component";
import { ColourComponent } from "./Components/filter/colour/colour.component";
import { PriceComponent } from "./Components/filter/price/price.component";
import { SizeComponent } from "./Components/filter/size/size.component";

const filteritems = [TipeComponent, ColourComponent, PriceComponent, SizeComponent];
const mainitems = [BodyComponent, FilterComponent, HeaderComponent, LogoComponent, LogoComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [...mainitems, ...filteritems],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'FillScreen';
}
