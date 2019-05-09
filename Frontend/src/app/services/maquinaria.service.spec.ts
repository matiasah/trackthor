import { TestBed } from '@angular/core/testing';

import { MaquinariaService } from './maquinaria.service';

describe('MaquinariaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaquinariaService = TestBed.get(MaquinariaService);
    expect(service).toBeTruthy();
  });
});
