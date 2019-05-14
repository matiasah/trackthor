import { TestBed } from '@angular/core/testing';

import { UsuarioChoferService } from './usuario-chofer.service';

describe('UsuarioChoferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsuarioChoferService = TestBed.get(UsuarioChoferService);
    expect(service).toBeTruthy();
  });
});
