import { Component } from '@angular/core';

@Component({
  selector: 'app-books-dashboard-component',
  templateUrl: './books-dashboard.component.html',
  styleUrls: ['./books-dashboard.component.scss']
})
export class BooksDashboardComponent {
  title = 'Angular Books Library App';
  reviewerName = 'Piotr';
}
