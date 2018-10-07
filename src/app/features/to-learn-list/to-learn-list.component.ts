import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ToLearnService } from './../../services/to-learn.service';

@Component({
  selector: 'app-to-learn-list',
  templateUrl: './to-learn-list.component.html',
})
export class ToLearnListComponent implements OnInit {
  public items: Item[];

  constructor (private toLearnService: ToLearnService) {
    this.toLearnService = toLearnService;
  }

  ngOnInit() {
    this.items = this.toLearnService.getItems();
  }
}
