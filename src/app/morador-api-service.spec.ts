import { TestBed } from '@angular/core/testing';

import { MoradorApiService } from './morador-api-service';

describe('MoradorApiService', () => {
  let service: MoradorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoradorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
