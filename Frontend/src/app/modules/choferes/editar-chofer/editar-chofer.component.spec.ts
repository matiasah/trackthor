import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarChoferComponent } from './editar-chofer.component';

describe('EditarChoferComponent', () => {
  let component: EditarChoferComponent;
  let fixture: ComponentFixture<EditarChoferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarChoferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
