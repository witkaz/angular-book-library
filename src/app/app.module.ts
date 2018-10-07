import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DemoComponent } from './features/demo/demo.component';
import { ToLearnListComponent } from './features/to-learn-list/to-learn-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    ToLearnListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
