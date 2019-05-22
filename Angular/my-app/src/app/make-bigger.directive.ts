import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { element } from '@angular/core/src/render3';

@Directive({
  selector: '[appMakeBigger]'
})
 
export class MakeBiggerDirective {

  
  title:"Abdu";
  constructor(private element: ElementRef, private element2:Renderer2) {

    // element.nativeElement.style.backgroundColor = 'green';
    
  }

  @HostListener('mouseenter') onMouseEnter(){

    this.doubleClick();
  }
  doubleClick() {
    // this.element2.setStyle(this.element.nativeElement, 'font-size', '3em')
    // this.element.nativeElement.style += '2em';
    this.element.nativeElement.style.fontSize = this.element.nativeElement.style.fontSize + '2em';

    // this.element.nativeElement.style.color = "yellow";
  }
  @HostListener('mouseleave') onMouseLeave() {
    // this.doubleClick();
    // this.element.nativeElement.style.backgroundColor = null;
    

  }
}
