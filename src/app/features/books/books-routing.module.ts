import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import { BooksStartComponent } from './books-start/books-start.component';
import { BooksEditComponent } from './books-edit/books-edit.component';
import { BooksDetailComponent } from './books-detail/books-detail.component';

const bookslistRoutes: Routes = [
  { path: '', component: BooksComponent, children: [
    { path: '', component: BooksStartComponent },
    { path: 'new', component: BooksEditComponent},
    { path: ':id', component: BooksDetailComponent },
    { path: ':id/edit', component: BooksDetailComponent }
  ]},
];

@NgModule({
  imports: [
    RouterModule.forChild(bookslistRoutes)
  ],
  exports: [RouterModule]
})
export class BooksRoutingModule {}
