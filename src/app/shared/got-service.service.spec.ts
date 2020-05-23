import { TestBed } from '@angular/core/testing';

import { GotServiceService } from './got-service.service';

describe('GotServiceService', () => {
  let service: GotServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GotServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
