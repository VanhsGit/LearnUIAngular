import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-frame',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.scss'
})
export class FrameComponent {
  OnSubmitForm(){
    alert("OnSubmitForm");
  }
}
