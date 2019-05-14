import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoferesComponent } from './choferes.component';

describe('ChoferesComponent', () => {
  let component: ChoferesComponent;
  let fixture: ComponentFixture<ChoferesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoferesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoferesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
