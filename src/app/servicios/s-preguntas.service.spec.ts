import { TestBed } from '@angular/core/testing';

import { SPreguntasService } from './s-preguntas.service';

describe('SPreguntasService', () => {
  let service: SPreguntasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SPreguntasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
