import { TestBed } from '@angular/core/testing';

import { PolicycopyService } from './policycopy.service';

describe('PolicycopyService', () => {
  let service: PolicycopyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PolicycopyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
