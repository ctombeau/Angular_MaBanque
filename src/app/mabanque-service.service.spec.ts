import { TestBed } from '@angular/core/testing';

import { MabanqueServiceService } from './mabanque-service.service';

describe('MabanqueServiceService', () => {
  let service: MabanqueServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MabanqueServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
