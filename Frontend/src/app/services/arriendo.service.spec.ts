import { TestBed } from '@angular/core/testing';

import { ArriendoService } from './arriendo.service';

describe('ArriendoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArriendoService = TestBed.get(ArriendoService);
    expect(service).toBeTruthy();
  });
});
