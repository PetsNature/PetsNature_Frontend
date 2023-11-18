import { TestBed } from '@angular/core/testing';

import { PublicacionesApiService } from './publicaciones-api.service';

describe('PublicacionesApiService', () => {
  let service: PublicacionesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicacionesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
