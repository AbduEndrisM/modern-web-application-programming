import { Component, OnInit } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.css']
})
export class LoopComponent implements OnInit {

  user:any;
  constructor() {
    this.user = { 
    name: "Abdu E.",
    sex: "M", 
    dept: "MSCS",
    course: "MWA-CS572",
    phone: [
          // "123-123-1234",
          // "456-456-4567",
          // "789-789-7899"
    ]};
  }
  ngOnInit() {
  }

}
