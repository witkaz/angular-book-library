import { Component } from '@angular/core';
import { Item } from './item';
import { ToLearnService } from './../../services/to-learn.service';

@Component({
  selector: 'app-to-learn-list',
  templateUrl: './to-learn-list.component.html',
})
export class ToLearnListComponent {
  items: Item[];

  constructor (toLearnService: ToLearnService) {
    this.items = toLearnService.getItems();
  }
}
