import { TestBed } from '@angular/core/testing';

import { VcompanyService } from './vcompany.service';

describe('VcompanyService', () => {
  let service: VcompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VcompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
