import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAlreadyReadComponent } from './books-already-read.component';

describe('BooksAlreadyReadComponent', () => {
  let component: BooksAlreadyReadComponent;
  let fixture: ComponentFixture<BooksAlreadyReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksAlreadyReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksAlreadyReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
