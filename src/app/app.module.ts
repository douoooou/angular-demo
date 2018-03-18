import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InputboxComponent } from './components/inputbox/inputbox.component';

import { FormsModule } from '@angular/forms';
import { ListboxComponent } from './components/listbox/listbox.component';

@NgModule({
  declarations: [
    AppComponent,
    InputboxComponent,
    ListboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
