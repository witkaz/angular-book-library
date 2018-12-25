import { Book } from './../book.model';
import { BookService } from './../book.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.scss']
})
export class BooksEditComponent implements OnInit {
  id: number;
  editMode = false;
  bookForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private bookService: BookService,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    // const newBook = new Book(
    //   this.bookForm.value['name'],
    //   this.bookForm.value['description'],
    //   this.bookForm.value['imagePath'],
    //   this.bookForm.value['bookSpecifications'],
    //   );
    if (this.editMode) {
      this.bookService.updateBook(this.id, this.bookForm.value);
    } else {
      this.bookService.addBook(this.bookForm.value);
    }
    this.onCancel();
  }

  onAddBook() {
    (<FormArray>this.bookForm.get('bookSpecifications')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'isbnNumber': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    );
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteBookSpec(index: number) {
    (<FormArray>this.bookForm.get('bookSpecifications')).removeAt(index);
  }

  private initForm() {
    let bookName = '';
    let bookImagePath = '';
    let bookDescription = '';
    let bookSpecification = new FormArray([]);

    if (this.editMode) {
      const book = this.bookService.getBook(this.id);
      bookName = book.name;
      bookImagePath = book.imagePath;
      bookDescription = book.description;
      if (book['bookSpecifications']) {
        for (let bookSpec of book.bookSpecification) {
          bookSpecification.push(
            new FormGroup({
              'name': new FormControl(bookSpec.publishingHouse),
              'isbnNumber': new FormControl(bookSpec.isbnNumber, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          );
        }
      }
    }
    this.bookForm = new FormGroup({
      'name': new FormControl(bookName, Validators.required),
      'imagePath': new FormControl(bookImagePath, Validators.required),
      'description': new FormControl(bookDescription, Validators.required),
      'bookSpecifications': bookSpecification
    });
  }

  getControls() {
    return (<FormArray>this.bookForm.get('bookSpecifications')).controls;
  }

}
