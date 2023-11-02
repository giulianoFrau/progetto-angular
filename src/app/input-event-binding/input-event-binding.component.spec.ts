import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputEventBindingComponent } from './input-event-binding.component';

describe('InputEventBindingComponent', () => {
  let component: InputEventBindingComponent;
  let fixture: ComponentFixture<InputEventBindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputEventBindingComponent]
    });
    fixture = TestBed.createComponent(InputEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
