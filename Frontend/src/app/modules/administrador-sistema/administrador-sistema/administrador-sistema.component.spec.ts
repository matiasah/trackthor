import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorSistemaComponent } from './administrador-sistema.component';

describe('AdministradorSistemaComponent', () => {
  let component: AdministradorSistemaComponent;
  let fixture: ComponentFixture<AdministradorSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
