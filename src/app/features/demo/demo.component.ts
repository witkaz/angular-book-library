import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  title = 'Angular Demo App';
  reviewerName = 'Piotr';
}
