import { ITEMSTOLEARN } from './to-learn-list';
import { Component } from '@angular/core';

@Component({
  selector: 'app-to-learn-list',
  templateUrl: './to-learn-list.component.html',
  styleUrls: ['./to-learn-list.component.scss']
})
export class ToLearnListComponent {
  items = ITEMSTOLEARN;
}
