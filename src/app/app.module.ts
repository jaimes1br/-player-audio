import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaComponetComponent } from './prueba-componet/prueba-componet.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
