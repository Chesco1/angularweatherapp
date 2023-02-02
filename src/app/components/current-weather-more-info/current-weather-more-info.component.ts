import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { Utilities } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-current-weather-more-info',
  templateUrl: './current-weather-more-info.component.html',
  styleUrls: ['./current-weather-more-info.component.css']
})
export class CurrentWeatherMoreInfoComponent {
  @Input() weatherData?: WeatherData;

  getFormattedTime(timestamp: number): string {
    return Utilities.getFormattedTime(timestamp);
  }
}
