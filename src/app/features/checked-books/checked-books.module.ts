import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { CheckedBooksComponent } from "./checked-books.component";
import { CheckedBooksEditComponent } from "./checked-books-edit/checked-books-edit.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        CheckedBooksComponent,
        CheckedBooksEditComponent,
    ]
})

export class CheckedBooksModule {}