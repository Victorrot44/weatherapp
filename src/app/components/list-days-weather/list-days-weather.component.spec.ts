import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDaysWeatherComponent } from './list-days-weather.component';

describe('ListDaysWeatherComponent', () => {
  let component: ListDaysWeatherComponent;
  let fixture: ComponentFixture<ListDaysWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDaysWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDaysWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
