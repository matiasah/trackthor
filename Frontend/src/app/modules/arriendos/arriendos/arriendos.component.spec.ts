import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriendosComponent } from './arriendos.component';

describe('ArriendosComponent', () => {
  let component: ArriendosComponent;
  let fixture: ComponentFixture<ArriendosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArriendosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArriendosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
