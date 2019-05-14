import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMaquinaComponent } from './registrar-maquina.component';

describe('RegistrarMaquinaComponent', () => {
  let component: RegistrarMaquinaComponent;
  let fixture: ComponentFixture<RegistrarMaquinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarMaquinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
