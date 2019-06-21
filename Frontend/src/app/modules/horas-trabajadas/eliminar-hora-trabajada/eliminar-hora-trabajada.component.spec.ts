import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarHoraTrabajadaComponent } from './eliminar-hora-trabajada.component';

describe('EliminarHoraTrabajadaComponent', () => {
  let component: EliminarHoraTrabajadaComponent;
  let fixture: ComponentFixture<EliminarHoraTrabajadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarHoraTrabajadaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarHoraTrabajadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
