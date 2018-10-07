import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DemoComponent } from './features/demo/demo.component';
import { ToLearnListComponent } from './features/to-learn/to-learn-list.component';
import { ToLearnComponent } from './features/to-learn/to-learn.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ToLearnListComponent,
    ToLearnComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
