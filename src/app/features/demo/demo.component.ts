import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-component',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'Angular Demo App';
  reviewerName = 'Piotr';

  constructor() { }

  ngOnInit() {
  }

}
