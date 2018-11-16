import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { BookSpecification } from 'src/app/shared/book-specification.model';
import { CheckedBooksService } from '../checked-books/checked-books.service';


@Injectable()

export class BookService {
    private books: Book[] = [
        // tslint:disable-next-line:max-line-length
        new Book('Book Example', 'The best book example description', 'https://www.ng-book.com/images/ng2/covers/any/ng-book-cover-ngb-ng-550.png', [
            new BookSpecification('Publishing House Example', 123123123),
        ]),
        // tslint:disable-next-line:max-line-length
        new Book('Book Second Example', 'The best book second example description', 'https://www.ng-book.com/images/ng2/covers/any/ng-book-cover-ngb-ng-550.png', [
            new BookSpecification('Publishing House Example', 5656565656),
        ])
    ];

    constructor(private checkedbooksService: CheckedBooksService) {}

    getBooks() {
        return this.books.slice();
    }

    getBook(index: number) {
      return this.books[index];
    }

    addBookSpecificationToCheckedBooks(bookSpecification: BookSpecification[]) {
      this.checkedbooksService.addManyBookSpecs(bookSpecification);
    }
}

