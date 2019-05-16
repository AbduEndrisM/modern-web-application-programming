import { Component } from '@angular/core';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello World!';
  
   componentCounterValue: number=0;

  showOutputData(data){
    this.componentCounterValue = data;
  }
}

