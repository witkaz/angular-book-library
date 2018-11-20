import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckedBooksComponent } from './features/checked-books/checked-books.component';
import { HomeComponent } from './core/home/home.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'books', loadChildren: './features/books/books.module#BooksModule'},
    { path: 'books-checked', component: CheckedBooksComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
