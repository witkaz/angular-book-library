import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { BookService } from './../book.service';
import { Book } from './../book.model';

@Component({
  selector: 'app-books-detail',
  templateUrl: './books-detail.component.html',
  styleUrls: ['./books-detail.component.scss']
})
export class BooksDetailComponent implements OnInit {
  book: Book;
  id: number;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private  router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.book = this.bookService.getBook(this.id);
        }
      );
  }

  onAddToCheckedBooks() {
    this.bookService.addBookSpecificationToCheckedBooks(this.book.bookSpecification);
  }

  onEditBook() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
