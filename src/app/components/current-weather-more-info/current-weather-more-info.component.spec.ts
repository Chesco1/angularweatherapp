import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentWeatherMoreInfoComponent } from './current-weather-more-info.component';

describe('CurrentWeatherMoreInfoComponent', () => {
  let component: CurrentWeatherMoreInfoComponent;
  let fixture: ComponentFixture<CurrentWeatherMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentWeatherMoreInfoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CurrentWeatherMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
