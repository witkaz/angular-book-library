import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { ToLearnService } from './service/to-learn.service';

@Component({
  selector: 'app-to-learn-list',
  templateUrl: './to-learn-list.component.html',
})
export class ToLearnListComponent implements OnInit {
  public items: Item[];

  constructor (private toLearnService: ToLearnService) {}

  private getItems(): void {
    this.items = this.toLearnService.getItems();
  }

  ngOnInit() {
   this.getItems();
  }
}
