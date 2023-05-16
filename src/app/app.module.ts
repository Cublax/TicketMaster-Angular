import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventComponent } from './event/event.component';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    EventComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
