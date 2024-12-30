import { ChangeDetectionStrategy, Component, inject, NgZone, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-new-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-message.component.html',
  styleUrl: './new-message.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewMessageComponent {
  add = output<string>();
  enteredText = signal('');

  private zone = inject(NgZone);

  constructor(){
    this.zone.runOutsideAngular(()=>{
      setTimeout(()=>{
        console.log("het gio roi");
      }, 4000)
    });
  }

  get debugOutput() {
    console.log('[NewMessage] "debugOutput" binding re-evaluated.');
    return 'NewMessage Component Debug Output';
  }

  get Coincard(){
    console.log("get Coint Card");
    return 'get custom';
  }

  onSubmit() {
    this.add.emit(this.enteredText());
    this.enteredText.set('');
  }
}
