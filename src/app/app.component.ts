import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hourly, WeatherData } from './models/weather.model';
import { Services } from './services/services';
import { Utilities } from './utilities/utilities';
import { HourlyDailyComponent } from './components/hourly-daily/hourly-daily.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(HourlyDailyComponent) hourlyDaily?: HourlyDailyComponent;
  constructor(private weatherService: Services) { }

  weatherData?: WeatherData;
  cityName: string = "Amsterdam";

  getFormattedTime(timestamp: number): string {
    return Utilities.getFormattedTime(timestamp);
  }

  onCityNameSubmitted(cityName: string) {
    this.getWeatherData(cityName);
  }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe(
      response => {
        if (response) {
          this.weatherData = response;
          this.cityName = Utilities.getFormattedCityName(cityName);
          if (this.hourlyDaily) {
            this.hourlyDaily!.setTimeInterval('hourly');
          }
        }
      }
    );
  }
}
