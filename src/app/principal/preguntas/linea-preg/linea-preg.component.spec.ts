import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineaPregComponent } from './linea-preg.component';

describe('LineaPregComponent', () => {
  let component: LineaPregComponent;
  let fixture: ComponentFixture<LineaPregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineaPregComponent]
    });
    fixture = TestBed.createComponent(LineaPregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
