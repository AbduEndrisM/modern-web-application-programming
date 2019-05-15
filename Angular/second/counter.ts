import { Component, ViewEncapsulation, Input, Output , EventEmitter} from '@angular/core';



@Component({
    selector: 'counter',
    templateUrl: './counter.html',
    styleUrls: ['./app.component.css'],
    
  encapsulation: ViewEncapsulation.Emulated
})
export class Counter {
    title = 'Homework #1';
    counterValue: number = 0;
    
    // @Input('componentCounterValue')  counterValue : number=0;

    // @Output() result: EventEmitter<number> = new EventEmitter<number>();

    increment() {
        this.counterValue += 1;
        this.messageEmitter.emit(this.counterValue);
        
    }

    decrement() {
        this.counterValue -= 1;
        this.messageEmitter.emit(this.counterValue);
     
    }
 
  
    @Output() messageEmitter = new EventEmitter();

    

}
