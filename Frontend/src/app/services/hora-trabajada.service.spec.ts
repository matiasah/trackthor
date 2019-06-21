import { TestBed } from '@angular/core/testing';

import { HoraTrabajadaService } from './hora-trabajada.service';

describe('HoraTrabajadaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoraTrabajadaService = TestBed.get(HoraTrabajadaService);
    expect(service).toBeTruthy();
  });
});
