import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSoluyionComponent } from './input-soluyion.component';

describe('InputSoluyionComponent', () => {
  let component: InputSoluyionComponent;
  let fixture: ComponentFixture<InputSoluyionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputSoluyionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSoluyionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
