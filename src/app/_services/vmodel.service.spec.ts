import { TestBed } from '@angular/core/testing';

import { VmodelService } from './vmodel.service';

describe('VmodelService', () => {
  let service: VmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
