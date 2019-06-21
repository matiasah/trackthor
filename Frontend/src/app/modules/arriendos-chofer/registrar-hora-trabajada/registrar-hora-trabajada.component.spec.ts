import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarHoraTrabajadaComponent } from './registrar-hora-trabajada.component';

describe('RegistrarHoraTrabajadaComponent', () => {
  let component: RegistrarHoraTrabajadaComponent;
  let fixture: ComponentFixture<RegistrarHoraTrabajadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarHoraTrabajadaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarHoraTrabajadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
