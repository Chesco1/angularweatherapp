import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { Utilities } from 'src/app/utilities/utilities';


@Component({
  selector: 'app-hourly-daily',
  templateUrl: './hourly-daily.component.html',
  styleUrls: ['./hourly-daily.component.css']
})
export class HourlyDailyComponent {
  @Input() weatherData?: WeatherData;
  readonly itemJumpPerClick: number = 4;
  readonly itemsDisplayedAtOnce: number = 4;

  selectedTimeInterval: string = "hourly";
  translateX: number = 0;
  animationDuration: number = 0.25;
  indexFirstItem: number = 0;

  setTimeInterval(newTimeInterval: string): void {
    this.jumpToStart();
    this.selectedTimeInterval = newTimeInterval;
  }

  shouldDisableButton(direction: string): boolean {
    if (direction === "left") {
      if (this.indexFirstItem <= 0) {
        return true;
      }
    } else {
      let maxFirstItemIndex = this.selectedTimeInterval === "hourly" ? 20 : 4;
      if (this.indexFirstItem >= maxFirstItemIndex) {
        return true;
      }
    }
    return false;
  }

  scrollLeft(): void {
    this.animationDuration = 0.25;
    this.translateX += (100 / this.itemsDisplayedAtOnce) * this.itemJumpPerClick;
    this.indexFirstItem -= this.itemJumpPerClick;
  }

  scrollRight(): void {
    this.animationDuration = 0.25;
    this.translateX -= (100 / this.itemsDisplayedAtOnce) * this.itemJumpPerClick;
    this.indexFirstItem += this.itemJumpPerClick;
  }

  jumpToStart(): void {
    this.animationDuration = 0;
    this.translateX += (100 * this.indexFirstItem / 4);
    this.indexFirstItem = 0;
  }

  getFormattedTime(timestamp: number): string {
    return Utilities.getFormattedTime(timestamp);
  }

  toFormattedCelsius(degreeKelvin: number): string {
    return Utilities.toFormattedCelsius(degreeKelvin);
  }

  getFormattedDayFromTimestamp(timestamp: number): string {
    const timestampDate = new Date(timestamp * 1000);
    const timeNow = new Date((this.weatherData!.current.dt + this.weatherData!.timezone_offset) * 1000);
    if (timestampDate.toLocaleDateString('en-US', { day: 'numeric', timeZone: 'UTC' }) === timeNow.toLocaleDateString('en-US', { day: 'numeric', timeZone: 'UTC' })) {
      return "Today";
    }
    return timestampDate.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' });
  }
}
