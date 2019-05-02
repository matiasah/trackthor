import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarMaquinariaComponent } from './registrar-maquinaria.component';

describe('RegistrarMaquinariaComponent', () => {
  let component: RegistrarMaquinariaComponent;
  let fixture: ComponentFixture<RegistrarMaquinariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarMaquinariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarMaquinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
