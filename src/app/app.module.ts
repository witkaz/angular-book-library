import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CheckedBooksModule } from './features/checked-books/checked-books.module';
import { SharedModule } from './shared/share.module';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';

const modules = [
  BrowserModule,
  AppRoutingModule,
  SharedModule,
  CheckedBooksModule,
  CoreModule,
  FormsModule
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: modules,
  bootstrap: [AppComponent]
})
export class AppModule { }
