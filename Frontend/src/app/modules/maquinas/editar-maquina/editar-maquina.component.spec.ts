import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMaquinaComponent } from './editar-maquina.component';

describe('EditarMaquinaComponent', () => {
  let component: EditarMaquinaComponent;
  let fixture: ComponentFixture<EditarMaquinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarMaquinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
