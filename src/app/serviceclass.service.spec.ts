import { TestBed } from '@angular/core/testing';

import { ServiceclassService } from './serviceclass.service';

describe('ServiceclassService', () => {
  let service: ServiceclassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceclassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
