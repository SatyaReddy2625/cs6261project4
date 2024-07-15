import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResistorCalculatorComponent } from './resistor-calculator.component';

describe('ResistorCalculatorComponent', () => {
  let component: ResistorCalculatorComponent;
  let fixture: ComponentFixture<ResistorCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResistorCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResistorCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
