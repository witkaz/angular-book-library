import { CheckedBooksService } from './checked-books.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookSpecification } from './../../shared/book-specification.model';


@Component({
  selector: 'app-checked-books',
  templateUrl: './checked-books.component.html',
  styleUrls: ['./checked-books.component.scss']
})
export class CheckedBooksComponent implements OnInit, OnDestroy {
  bookSpecs: BookSpecification[];
  private subscription: Subscription;

  constructor(private checkedBooksService: CheckedBooksService) { }

  ngOnInit() {
    this.bookSpecs = this.checkedBooksService.getbooksSpecifications();
    this.subscription = this.checkedBooksService.booksSpecChanged
      .subscribe(
        (ingredients: BookSpecification[]) => {
          this.bookSpecs = ingredients;
        }
      );
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

}
