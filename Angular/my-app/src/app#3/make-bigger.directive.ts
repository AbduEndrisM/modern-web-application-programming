import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMakeBigger]'
})
 
export class MakeBiggerDirective {

  
  title:"Abdu";
  constructor(private element: ElementRef) {

    // element.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseenter') onMouseEnter(){

    this.doubleClick();
  }
  doubleClick() {
    this.element.nativeElement.style.fontSize = 8;
    this.element.nativeElement.style.backgroundColor = "yellow";
  }
  @HostListener('mouseleave') onMouseLeave() {
    // this.doubleClick();
    this.element.nativeElement.style.backgroundColor = null;
  }
}
