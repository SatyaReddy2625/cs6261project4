import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResistorCalculatorComponent } from './resistor-calculator/resistor-calculator.component';
import { ResistorService } from './resistor.service';


@NgModule({
  declarations: [
    AppComponent,
    ResistorCalculatorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ResistorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
