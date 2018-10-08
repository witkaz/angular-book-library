import { Injectable } from '@angular/core';
import { ITEMSTOLEARN } from '../../features/to-learn-list/to-learn-list';


@Injectable({
  providedIn: 'root'
})

export class ToLearnService {
  getItems() { return ITEMSTOLEARN; }
}
