import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrobdownSearchComponent } from './drobdown-search.component';

describe('DrobdownSearchComponent', () => {
  let component: DrobdownSearchComponent;
  let fixture: ComponentFixture<DrobdownSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrobdownSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrobdownSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
