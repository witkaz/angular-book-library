import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from "./features/books/books.component";
import { BooksStartComponent } from "./features/books/books-start/books-start.component";
import { BooksEditComponent } from "./features/books/books-edit/books-edit.component";
import { BooksDetailComponent } from "./features/books/books-detail/books-detail.component";
import { CheckedBooksComponent } from "./features/checked-books/checked-books.component";


const appRoutes: Routes = [
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', component: BooksComponent, children: [
        { path: '', component: BooksStartComponent},
        { path: 'new', component: BooksEditComponent},
        { path: ':id', component: BooksDetailComponent},
        { path: ':id/edit', component: BooksEditComponent }
    ]},
    { path: 'books-checked', component: CheckedBooksComponent }
   
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}