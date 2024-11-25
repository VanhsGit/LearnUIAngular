import { Component, model, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

const materialItems = [MatRadioModule, MatCardModule, MatCheckboxModule];

@Component({
  selector: 'app-tipe',
  standalone: true,
  imports: [FormsModule, ...materialItems],
  templateUrl: './tipe.component.html',
  styleUrl: './tipe.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush 
})
export class TipeComponent {
  tipes = ["Basic", "Pattern", "Hoodie", "Zipper", "Oversize"];
  readonly checked = model(false);
  readonly indeterminate = model(false);
}
