import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarEmpresaComponent } from './registrar-empresa.component';

describe('RegistrarEmpresaComponent', () => {
  let component: RegistrarEmpresaComponent;
  let fixture: ComponentFixture<RegistrarEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
