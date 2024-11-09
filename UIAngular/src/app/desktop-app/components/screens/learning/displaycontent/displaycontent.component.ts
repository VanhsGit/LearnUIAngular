import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-displaycontent',
  templateUrl: './displaycontent.component.html',
  styleUrl: './displaycontent.component.scss',
  standalone: false
})
export class DisplaycontentComponent {
  // name = input<number>();
  @Input() name: number | undefined;
}
