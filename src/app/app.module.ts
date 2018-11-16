import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { BooksComponent } from './features/books/books.component';
import { BooksDetailComponent } from './features/books/books-detail/books-detail.component';
import { BooksListComponent } from './features/books/books-list/books-list.component';
import { BookItemComponent } from './features/books/books-list/book-item/book-item.component';
import { BooksStartComponent } from './features/books/books-start/books-start.component';
import { AppRoutingModule } from './app-routing.module';
import { CheckedBooksComponent } from './features/checked-books/checked-books.component';
import { CheckedBooksEditComponent } from './features/checked-books/checked-books-edit/checked-books-edit.component';
import { BooksEditComponent } from './features/books/books-edit/books-edit.component';
import { CheckedBooksService } from './features/checked-books/checked-books.service';
import { DropdownDirective } from './shared/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BooksComponent,
    BooksDetailComponent,
    BooksListComponent,
    BookItemComponent,
    BooksStartComponent,
    CheckedBooksComponent,
    CheckedBooksEditComponent,
    BooksEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CheckedBooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
