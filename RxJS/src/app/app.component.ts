import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { customService } from './custom.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent  implements OnInit{
  private destroyref = inject(DestroyRef);
  private custom$ = inject(customService);

  customInterval$ = new Observable((subscriber)=> {
    let timeInverval = 0;
    const setInverval =  setInterval(()=>{
      timeInverval++;
      if(timeInverval > 3){
        clearInterval(setInverval);
        subscriber.complete;
      }
      this.custom$.custom$.next(["cus", "tom"]);
      console.log("custom interval by Vanh");
      subscriber.next({message: "New value"});
    }, 2000)
  })

  countClick = signal(0);
  constructor(){
    effect(()=>{
      console.log(`Count click ${this.countClick()} times`)
    })
  }
  

  onClickCount(){
    this.countClick.update(x => x +1);
  }

  ngOnInit(): void {
    this.customInterval$.subscribe({
      next: (val) => console.log(val)
    })

    this.custom$.custom$.subscribe((val)=>{
      console.log(val);
    })
    // const subscription = interval(1000).pipe(
    //   map((val) => val*3) 
    // ).subscribe({
    //   next: (val) => console.log(val)
    // });

    // this.destroyref.onDestroy(()=>{
    //   subscription.unsubscribe();
    // })
  }

  
}
