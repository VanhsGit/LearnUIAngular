import { Component, Directive, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: 'p[npDirective], a[npDirective]',
  standalone: true,
  host: {
    '(click)':'customEvent($event)'
  }
})
export class NpDirective{
  navTo = input('https://www.instagram.com/ph.n.vanh/?hl=en');

  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  customEvent(event: MouseEvent){

    const show = window.confirm("this is a custom Directive");
    if(show) {
      // const address = (event.target as HTMLAnchorElement).href;
      // (event.target as HTMLAnchorElement).href = this.navTo();
      this.hostElementRef.nativeElement.href = this.navTo();
      return;
    }


    event.preventDefault();
  }
}
