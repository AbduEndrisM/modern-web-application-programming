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
    
   
    increment() {
        this.counterValue += 1;
        // console.log("Increment");
    }

    decrement() {
        this.counterValue -= 1;
        // console.log("Decrement") 
    }
  
}
