import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrameComponent } from "./Items/frame/frame.component";
import { FormsModule } from '@angular/forms';
import { NpDirective } from './Directives/np-directive/np-directive.component';
import { DatePipe, DecimalPipe } from '@angular/common';
import { CustomerPipe } from './Pipes/custom.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FrameComponent, FormsModule, NpDirective, DatePipe, DecimalPipe, CustomerPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  title = 'Practice';
  OnSubmitForm(refInput: HTMLInputElement){
    console.log(refInput.value);
    this.form().nativeElement.reset();
  }
}
