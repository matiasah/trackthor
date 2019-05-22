import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarChoferComponent } from './eliminar-chofer.component';

describe('EliminarChoferComponent', () => {
  let component: EliminarChoferComponent;
  let fixture: ComponentFixture<EliminarChoferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarChoferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarChoferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
