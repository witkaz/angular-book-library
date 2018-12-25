import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { BookSpecification } from 'src/app/shared/book-specification.model';
import { CheckedBooksService } from '../checked-books/checked-books.service';
import { Subject } from 'rxjs';


@Injectable()

export class BookService {
    booksChanged = new Subject<Book[]>();

    private books: Book[] = [
        // tslint:disable-next-line:max-line-length
        new Book('Book Example', 'The best book example description', 'https://www.ng-book.com/images/ng2/covers/any/ng-book-cover-ngb-ng-550.png', [
            new BookSpecification('Publishing House Example', 123123123),
        ]),
        // tslint:disable-next-line:max-line-length
        new Book('Book Second Example', 'The best book second example description', 'https://ecsmedia.pl/c/polska-odwraca-oczy-w-iext43264597.jpg', [
            new BookSpecification('Publishing House Second Example', 78787878),
        ]),
        // tslint:disable-next-line:max-line-length
        new Book('Book Third Example', 'The best book third example description', 'https://images-na.ssl-images-amazon.com/images/I/41V1YAzDcGL._SX326_BO1,204,203,200_.jpg', [
            new BookSpecification('Publishing House Example Third', 5656565656),
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

    addBook(book: Book) {
      this.books.push(book);
      this.booksChanged.next(this.books.slice());
    }

    updateBook(index: number, newBook: Book) {
      this.books[index] = newBook;
      this.booksChanged.next(this.books.slice());
    }

    deleteBook(index: number) {
      this.books.splice(index, 1);
      this.booksChanged.next(this.books.slice());
    }
}

