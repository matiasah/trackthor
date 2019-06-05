import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarArriendoComponent } from './registrar-arriendo.component';

describe('RegistrarArriendoComponent', () => {
  let component: RegistrarArriendoComponent;
  let fixture: ComponentFixture<RegistrarArriendoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarArriendoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarArriendoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
