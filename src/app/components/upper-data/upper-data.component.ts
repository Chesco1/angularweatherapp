import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';
import { Utilities } from 'src/app/utilities/utilities';

@Component({
  selector: 'app-upper-data',
  templateUrl: './upper-data.component.html',
  styleUrls: ['./upper-data.component.css']
})
export class UpperDataComponent {
  @Input() cityName?: string;
  @Input() weatherData?: WeatherData;

  getBackgroundImagePath(): string {
    let stringPartToAdd: string = (this.weatherData!.current.dt < this.weatherData!.current.sunrise || this.weatherData!.current.dt > this.weatherData!.current.sunset) ? "night-" : "";
    if (this.weatherData!.current.weather[0].main == 'Clear' || this.weatherData!.current.weather[0].main == 'Clouds' || this.weatherData!.current.weather[0].main == 'Rain' || this.weatherData!.current.weather[0].main == 'Snow') {
      return `../assets/${stringPartToAdd}${this.weatherData!.current.weather[0].main}.jpg`;
    }
    return "../assets/Clear.jpg";
  }

  toFormattedCelsius(degreeKelvin: number): string {
    return Utilities.toFormattedCelsius(degreeKelvin);
  }

  getFormattedTime(timestamp: number): string {
    return Utilities.getFormattedTime(timestamp);
  }

  getFormattedDayFromTimestamp(timestamp: number): string {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', { weekday: 'short', timeZone: 'UTC' });
  }
}
