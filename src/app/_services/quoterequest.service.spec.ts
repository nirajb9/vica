import { TestBed } from '@angular/core/testing';

import { QuoterequestService } from './quoterequest.service';

describe('QuoterequestService', () => {
  let service: QuoterequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuoterequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
