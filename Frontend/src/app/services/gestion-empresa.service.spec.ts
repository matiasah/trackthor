import { TestBed } from '@angular/core/testing';

import { GestionEmpresaService } from './gestion-empresa.service';

describe('GestionEmpresaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GestionEmpresaService = TestBed.get(GestionEmpresaService);
    expect(service).toBeTruthy();
  });
});
