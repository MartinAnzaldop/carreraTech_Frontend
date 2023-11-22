import { TestBed } from '@angular/core/testing';

import { TestNivelService } from './test-nivel.service';

describe('TestNivelService', () => {
  let service: TestNivelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestNivelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
