import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegerInputsComponent } from './integer-inputs.component';

describe('IntegerInputsComponent', () => {
  let component: IntegerInputsComponent;
  let fixture: ComponentFixture<IntegerInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegerInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegerInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
