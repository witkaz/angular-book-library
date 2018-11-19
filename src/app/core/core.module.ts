import { NgModule } from "@angular/core";

import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { SharedModule } from "../shared/share.module";
import { AppRoutingModule } from "../app-routing.module";
import { CheckedBooksService } from "../features/checked-books/checked-books.service";
import { BookService } from "../features/books/book.service";

@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    declarations: [
        NavbarComponent,
        HomeComponent
    ],
    exports: [
        AppRoutingModule,
        NavbarComponent
    ],
    providers: [
        CheckedBooksService,
        BookService
    ]
})

export class CoreModule {}