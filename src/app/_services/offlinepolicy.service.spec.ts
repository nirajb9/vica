import { TestBed } from '@angular/core/testing';

import { OfflinepolicyService } from './offlinepolicy.service';

describe('OfflinepolicyService', () => {
  let service: OfflinepolicyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfflinepolicyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
