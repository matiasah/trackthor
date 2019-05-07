import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorEmpresaComponent } from './administrador-empresa.component';

describe('AdministradorEmpresaComponent', () => {
  let component: AdministradorEmpresaComponent;
  let fixture: ComponentFixture<AdministradorEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministradorEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradorEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
