import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { Utilities } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.css']
})
export class HourlyWeatherComponent {
  @Input() weatherData?: WeatherData;

  translateX: number = 0;
  itemJumpPerClick: number = 4;
  indexFirstHourlyWeatherItem: number = 0;

  scrollLeft(): void {
    this.translateX += 100;
    this.indexFirstHourlyWeatherItem -= this.itemJumpPerClick;
  }

  scrollRight(): void {
    this.translateX -= 100;
    this.indexFirstHourlyWeatherItem += this.itemJumpPerClick;
  }

  scrollToStart(): void {
    this.translateX += (100 * this.indexFirstHourlyWeatherItem / 4);
    this.indexFirstHourlyWeatherItem = 0;
  }

  getFormattedTime(timestamp: number): string {
    return Utilities.getFormattedTime(timestamp);
  }
}
