import { BookSpecification } from 'src/app/shared/book-specification.model';
import { Book } from './../../books/book.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CheckedBooksService } from './../checked-books.service';

@Component({
  selector: 'app-checked-books-edit',
  templateUrl: './checked-books-edit.component.html',
  styleUrls: ['./checked-books-edit.component.scss']
})
export class CheckedBooksEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('isbnInput') isbnInputRef: ElementRef;

  constructor(private checkedBooksService: CheckedBooksService) { }

  ngOnInit() {
  }

  onAddItem() {
    const pubHouseName = this.nameInputRef.nativeElement.value;
    const isbnNumber = this.isbnInputRef.nativeElement.value;
    const newBookSpec = new BookSpecification(pubHouseName, isbnNumber);
    this.checkedBooksService.addBookSpec(newBookSpec);
  }
}
