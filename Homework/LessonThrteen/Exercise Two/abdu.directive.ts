import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAbdu]'
})
export class AbduDirective {

  constructor(e1:ElementRef) { 
    // e1.nativeElement.style.backgroundColor = 'yellow';
    
    e1.nativeElement.style.display = 'none';
  }

}
