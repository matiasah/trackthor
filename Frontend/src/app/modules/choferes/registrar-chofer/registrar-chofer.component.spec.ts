import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarChoferComponent } from './registrar-chofer.component';

describe('RegistrarChoferComponent', () => {
  let component: RegistrarChoferComponent;
  let fixture: ComponentFixture<RegistrarChoferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarChoferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
