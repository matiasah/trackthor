import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTipoMaquinaComponent } from './registrar-tipo-maquina.component';

describe('RegistrarTipoMaquinaComponent', () => {
  let component: RegistrarTipoMaquinaComponent;
  let fixture: ComponentFixture<RegistrarTipoMaquinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarTipoMaquinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarTipoMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
