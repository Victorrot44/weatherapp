import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightDayComponent } from './highlight-day.component';

describe('HighlightDayComponent', () => {
  let component: HighlightDayComponent;
  let fixture: ComponentFixture<HighlightDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlightDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighlightDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
