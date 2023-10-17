import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaAsigComponent } from './linea-asig.component';

describe('LineaAsigComponent', () => {
  let component: LineaAsigComponent;
  let fixture: ComponentFixture<LineaAsigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineaAsigComponent]
    });
    fixture = TestBed.createComponent(LineaAsigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
