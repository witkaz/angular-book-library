import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksReadEditComponent } from './books-read-edit.component';

describe('BooksReadEditComponent', () => {
  let component: BooksReadEditComponent;
  let fixture: ComponentFixture<BooksReadEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksReadEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksReadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
