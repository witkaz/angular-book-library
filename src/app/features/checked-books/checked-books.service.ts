import { Subject } from 'rxjs';
import { BookSpecification } from '../../shared/book-specification.model';

export class CheckedBooksService {
  booksSpecChanged = new Subject<BookSpecification[]>();
  startedEditing = new Subject<number>();

  private booksSpecifications: BookSpecification[] = [
    new BookSpecification('Literature', 5222),
    new BookSpecification('Big Literature', 10222)
  ];

  getbooksSpecifications() {
    return this.booksSpecifications.slice();
  }

  getbookSpecifiation(index: number) {
    return this.booksSpecifications[index];
  }

  addBookSpec(bookSpec: BookSpecification) {
    this.booksSpecifications.push(bookSpec);
    this.booksSpecChanged.next(this.booksSpecifications.slice());
  }

  addManyBookSpecs(booksSpecifications: BookSpecification[]) {
    this.booksSpecifications.push(...booksSpecifications);
    this.booksSpecChanged.next(this.booksSpecifications.slice());
  }

  updateBookSpec(index: number, newBookSpec: BookSpecification) {
    this.booksSpecifications[index] = newBookSpec;
    this.booksSpecChanged.next(this.booksSpecifications.slice());
  }

  deleteBookSpec(index: number) {
    this.booksSpecifications.splice(index);
    this.booksSpecChanged.next(this.booksSpecifications.slice());
  }
}
