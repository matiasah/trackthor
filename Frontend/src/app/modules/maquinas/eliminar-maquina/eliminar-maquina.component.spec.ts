import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMaquinaComponent } from './eliminar-maquina.component';

describe('EliminarMaquinaComponent', () => {
  let component: EliminarMaquinaComponent;
  let fixture: ComponentFixture<EliminarMaquinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarMaquinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMaquinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
