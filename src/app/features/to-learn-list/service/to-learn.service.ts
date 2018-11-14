import { Injectable } from '@angular/core';
import { ITEMSTOLEARN } from './to-learn-list';


@Injectable({
  providedIn: 'root'
})

export class ToLearnService {
  getItems() { return ITEMSTOLEARN; }
}
