import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionMaquinasComponent } from './ubicacion-maquinas.component';

describe('UbicacionMaquinasComponent', () => {
  let component: UbicacionMaquinasComponent;
  let fixture: ComponentFixture<UbicacionMaquinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicacionMaquinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
