import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToLearnListComponent } from './to-learn-list.component';

describe('ToLearnListComponent', () => {
  let component: ToLearnListComponent;
  let fixture: ComponentFixture<ToLearnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToLearnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToLearnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
