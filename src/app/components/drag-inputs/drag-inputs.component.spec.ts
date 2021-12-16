import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragInputsComponent } from './drag-inputs.component';

describe('DragInputsComponent', () => {
  let component: DragInputsComponent;
  let fixture: ComponentFixture<DragInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DragInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
