import { Subscription } from 'rxjs';
import { BookSpecification } from 'src/app/shared/book-specification.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { CheckedBooksService } from './../checked-books.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checked-books-edit',
  templateUrl: './checked-books-edit.component.html',
  styleUrls: ['./checked-books-edit.component.scss']
})
export class CheckedBooksEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') chbForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: BookSpecification;

  constructor(private checkedBooksService: CheckedBooksService) { }

  ngOnInit() {
    this.subscription = this.checkedBooksService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
          this.editedItem = this.checkedBooksService.getbookSpecifiation(index);
          this.chbForm.controls['publishingHouseName'].setValue(this.editedItem.publishingHouse);
          this.chbForm.controls['isbnNumber'].setValue(this.editedItem.isbnNumber);
          // this.chbForm.setValue({
          //   name: this.editedItem.publishingHouse = '',
          //   isbnNumber: this.editedItem.isbnNumber = 0
          // });
        }
      );
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newBookSpec = new BookSpecification(value.publishingHouseName, value.isbnNumber);
    if (this.editMode) {
      this.checkedBooksService.updateBookSpec(this.editedItemIndex, newBookSpec);
    } else {
      this.checkedBooksService.addBookSpec(newBookSpec);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    this.chbForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.checkedBooksService.deleteBookSpec(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
