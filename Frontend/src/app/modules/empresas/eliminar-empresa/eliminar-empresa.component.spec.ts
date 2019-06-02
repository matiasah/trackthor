import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEmpresaComponent } from './eliminar-empresa.component';

describe('EliminarEmpresaComponent', () => {
  let component: EliminarEmpresaComponent;
  let fixture: ComponentFixture<EliminarEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
