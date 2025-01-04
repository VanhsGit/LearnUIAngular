import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, signal } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0)'
      })),
      state('hightlighted', style({
        'backgroundColor': 'blue',
        transform: 'translateX(100px)'
      })),
      transition('normal <=> hightlighted', animate(300))
    ]),
    trigger('wildState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('hightlighted', style({
        'backgroundColor': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'backgroundColor': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),
      transition('normal <=> hightlighted', animate(300)),
      transition('shrunken <=> *', animate(300, style({
        borderRadius: '50px'
      })))
    ]),
    trigger('list1',[
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ]),
      transition('void => *',[
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(300)
      ] )
    ])
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = signal('normal');
  wild = signal('normal');

  onAnimate(){
    this.state() == 'normal' ? this.state.set('hightlighted') : this.state.set('normal');
    this.wild() == 'normal' ? this.wild.set('hightlighted') : this.wild.set('normal');
  }

  onShrunken(){
    this.wild.set('shrunken');
  }
    onAdd(item: string) {
      this.list.push(item);
    }

    onDelete(item: string){
      this.list.filter(u => u !== item);
    }
}
