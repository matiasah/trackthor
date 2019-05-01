import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroMaquinariaComponent } from './registro-maquinaria.component';

describe('RegistroMaquinariaComponent', () => {
  let component: RegistroMaquinariaComponent;
  let fixture: ComponentFixture<RegistroMaquinariaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroMaquinariaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMaquinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
