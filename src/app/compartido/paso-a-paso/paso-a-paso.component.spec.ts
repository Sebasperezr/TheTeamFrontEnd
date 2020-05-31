import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoAPasoComponent } from './paso-a-paso.component';

describe('PasoAPasoComponent', () => {
  let component: PasoAPasoComponent;
  let fixture: ComponentFixture<PasoAPasoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasoAPasoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasoAPasoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
