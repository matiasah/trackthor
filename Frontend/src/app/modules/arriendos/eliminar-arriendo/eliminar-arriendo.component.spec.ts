import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarArriendoComponent } from './eliminar-arriendo.component';

describe('EliminarArriendoComponent', () => {
  let component: EliminarArriendoComponent;
  let fixture: ComponentFixture<EliminarArriendoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarArriendoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
