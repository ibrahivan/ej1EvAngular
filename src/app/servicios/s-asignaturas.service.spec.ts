import { TestBed } from '@angular/core/testing';

import { SAsignaturasService } from './s-asignaturas.service';

describe('SAsignaturasService', () => {
  let service: SAsignaturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SAsignaturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
