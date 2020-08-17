import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './Property/Property-Card/Property-Card.component';
import { ProductListComponent } from './Property/product-list/product-list.component';
import {NavigationBarComponent} from './Navigation-Bar/Navigation-Bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    ProductListComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
