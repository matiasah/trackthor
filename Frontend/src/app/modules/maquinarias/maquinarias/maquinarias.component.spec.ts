import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinariasComponent } from './maquinarias.component';

describe('MaquinariasComponent', () => {
  let component: MaquinariasComponent;
  let fixture: ComponentFixture<MaquinariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaquinariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
