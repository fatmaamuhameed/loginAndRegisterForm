import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateInputsComponent } from './generate-inputs.component';

describe('GenerateInputsComponent', () => {
  let component: GenerateInputsComponent;
  let fixture: ComponentFixture<GenerateInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
