import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorasTrabajadasComponent } from './horas-trabajadas.component';

describe('HorasTrabajadasComponent', () => {
  let component: HorasTrabajadasComponent;
  let fixture: ComponentFixture<HorasTrabajadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorasTrabajadasComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorasTrabajadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
