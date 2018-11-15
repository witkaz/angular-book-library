import { Subject } from 'rxjs';
import { BookSpecification } from '../../shared/book-specification.model';
import { Book } from '../books/book.model';

export class CheckedBooksService {
  booksSpecChanged = new Subject<BookSpecification[]>();

  private booksSpecifications: BookSpecification[] = [
    new BookSpecification('Literature', 5222),
    new BookSpecification('Big Literature', 10222)
  ];

  getIngredients() {
    return this.booksSpecifications.slice();
  }

  addBookSpec(bookSpec: BookSpecification) {
    this.booksSpecifications.push(bookSpec);
    this.booksSpecChanged.next(this.booksSpecifications.slice());
  }

  addManyBookSpec(booksSpecifications: BookSpecification[]) {
    // for (let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.booksSpecifications.push(...booksSpecifications);
    this.booksSpecChanged.next(this.booksSpecifications.slice());
  }
}
