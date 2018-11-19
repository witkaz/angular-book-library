import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "src/app/shared/share.module";
import { BooksComponent } from "./books.component";
import { BooksDetailComponent } from "./books-detail/books-detail.component";
import { BookItemComponent } from "./books-list/book-item/book-item.component";
import { BooksStartComponent } from "./books-start/books-start.component";
import { BooksListComponent } from "./books-list/books-list.component";
import { BooksEditComponent } from "./books-edit/books-edit.component";
import { BooksRoutingModule } from "./books-routing.module";


@NgModule({
    imports: [
        CommonModule,
        BooksRoutingModule,
        SharedModule
    ],
    declarations: [
        BooksComponent,
        BooksDetailComponent,
        BooksListComponent,
        BookItemComponent,
        BooksStartComponent,
        BooksEditComponent,
    ]
})

export class BooksModule {

}