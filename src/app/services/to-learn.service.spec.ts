import { TestBed } from '@angular/core/testing';

import { ToLearnService } from './to-learn.service';

describe('ToLearnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToLearnService = TestBed.get(ToLearnService);
    expect(service).toBeTruthy();
  });
});
