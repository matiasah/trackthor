import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertasComponent } from './alertas.component';

describe('AlertasComponent', () => {
  let component: AlertasComponent;
  let fixture: ComponentFixture<AlertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertasComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
