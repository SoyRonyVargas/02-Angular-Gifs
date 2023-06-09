import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { HttpClientModule } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    GifsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
