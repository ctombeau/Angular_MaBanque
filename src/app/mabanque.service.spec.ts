import { TestBed } from '@angular/core/testing';

import { MabanqueService } from './mabanque.service';

describe('MabanqueService', () => {
  let service: MabanqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MabanqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
