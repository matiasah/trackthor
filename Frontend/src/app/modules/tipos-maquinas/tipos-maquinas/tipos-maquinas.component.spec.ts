import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TiposMaquinasComponent } from './tipos-maquinas.component';

describe('TiposMaquinasComponent', () => {
  let component: TiposMaquinasComponent;
  let fixture: ComponentFixture<TiposMaquinasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TiposMaquinasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TiposMaquinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
