import { Book } from "./book.model";
import { BookSpecification } from "src/app/shared/book-specification.model";
import { CheckedBooksService } from "../checked-books/checked-books.service";

export class BookService {
    private books: Book[] = [   
        new Book('Book Example', 'The best book example description', 'https://www.ng-book.com/images/ng2/covers/any/ng-book-cover-ngb-ng-550.png', [
            new BookSpecification('Publishing House Example', 12312-3123),
        ]),
        new Book('Book Second Example', 'The best book second example description', 'https://www.ng-book.com/images/ng2/covers/any/ng-book-cover-ngb-ng-550.png', [
            new BookSpecification('Publishing House Example', 1233131312-312312313),
        ])
    ];

    constructor(private checkedbooksService: CheckedBooksService) {}

    getBooks() {
        return this.books.slice();
    }
}

