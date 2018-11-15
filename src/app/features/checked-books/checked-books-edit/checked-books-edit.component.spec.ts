import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedBooksEditComponent } from './checked-books-edit.component';

describe('BooksReadEditComponent', () => {
  let component: CheckedBooksEditComponent;
  let fixture: ComponentFixture<CheckedBooksEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedBooksEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedBooksEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
