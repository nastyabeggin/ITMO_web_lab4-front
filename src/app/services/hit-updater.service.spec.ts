import { TestBed } from '@angular/core/testing';

import { HitUpdaterService } from './hit-updater.service';

describe('HitUpdaterService', () => {
  let service: HitUpdaterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HitUpdaterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
