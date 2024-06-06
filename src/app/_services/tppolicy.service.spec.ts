import { TestBed } from '@angular/core/testing';

import { TppolicyService } from './tppolicy.service';

describe('TppolicyService', () => {
  let service: TppolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TppolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
