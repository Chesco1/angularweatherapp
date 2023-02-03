import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyDailyComponent as HourlyDailyComponent } from './hourly-daily.component';

describe('HourlyDailyComponent', () => {
  let component: HourlyDailyComponent;
  let fixture: ComponentFixture<HourlyDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HourlyDailyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HourlyDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
