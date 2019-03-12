import { TestBed } from '@angular/core/testing';

import { MonarchService } from './monarch.service';

describe('MonarchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MonarchService = TestBed.get(MonarchService);
    expect(service).toBeTruthy();
  });
});
