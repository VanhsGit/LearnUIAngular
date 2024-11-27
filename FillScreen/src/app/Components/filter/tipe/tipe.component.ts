import { Component, model, ChangeDetectionStrategy, ViewEncapsulation, HostBinding, HostListener } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush ,
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'tipe-container',
    '(click)': 'OnClickSomething()'
  }
})
export class TipeComponent {
  tipes = ["Basic", "Pattern", "Hoodie", "Zipper", "Oversize"];
  readonly checked = model(false);
  readonly indeterminate = model(false);
  @HostBinding("class") className = 'test';
  // @HostListener('click') OnClick(){
  //   alert("On Click host Listener");
  // }

  OnClickSomething(){
    alert('Clicked !');
  }
}
