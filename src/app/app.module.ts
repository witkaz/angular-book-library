import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BooksDashboardComponent } from './features/books-dashboard/books-dashboard.component';
import { ToLearnListComponent } from './features/to-learn-list/to-learn-list.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { BooksComponent } from './features/books/books.component';
import { BooksDetailComponent } from './features/books/books-detail/books-detail.component';
import { BooksListComponent } from './features/books/books-list/books-list.component';
import { BookItemComponent } from './features/books/books-list/book-item/book-item.component';
import { BooksStartComponent } from './features/books/books-start/books-start.component';
import { BooksAlreadyReadComponent } from './features/books-already-read/books-already-read.component';
import { BooksReadEditComponent } from './features/books-already-read/books-read-edit/books-read-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksDashboardComponent,
    ToLearnListComponent,
    NavbarComponent,
    BooksComponent,
    BooksDetailComponent,
    BooksListComponent,
    BookItemComponent,
    BooksStartComponent,
    BooksAlreadyReadComponent,
    BooksReadEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
