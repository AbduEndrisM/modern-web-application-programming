import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DateComponent } from './date/date.component';
import { LoopComponent } from './loop/loop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DateComponent,
    LoopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
