import { TestBed } from '@angular/core/testing';

import { HitCheckService } from './hit-check.service';

describe('HitCheckService', () => {
  let service: HitCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HitCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
