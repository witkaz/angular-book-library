import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedBooksComponent } from './checked-books.component';

describe('CheckedBooksComponent', () => {
  let component: CheckedBooksComponent;
  let fixture: ComponentFixture<CheckedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
