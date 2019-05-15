import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  dateMessage: String;
  timeMessage: String;

  constructor() {
    setInterval(() => {
      this.dateMessage = new Date().toDateString();
      this.timeMessage = new Date().toLocaleTimeString();
    }, 1000)
  }
  AddTwoNumbers(x, y) {
    return x + "+" + y + " = " + x + y;
  }
  SubTwoNumbers(x, y) {
    return x + "-" + y + " = " + (x - y);
  }
  MulTwoNumbers(x, y) {
    return x + "*" + y + " = " + x * y;
  }
  DivTwoNumbers(x, y) {
    return x + "/" + y + " = " + x / y;
  }

  ngOnInit() {
  }

}
