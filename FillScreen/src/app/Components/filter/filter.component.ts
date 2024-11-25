import { Component } from '@angular/core';
import { ColourComponent } from './colour/colour.component';
import { PriceComponent } from './price/price.component';
import { TipeComponent } from './tipe/tipe.component';
import { ButtonComponent } from '../../../shared/button/button.component';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {

}
