import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [BookService]
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
