import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hourly, WeatherData } from './models/weather.model';
import { Services } from './services/services';
import { Utilities } from './utilities/utilities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: Services) { }

  weatherData?: WeatherData;
  cityName: string = "Amsterdam";

  translateX: number = 0;

  itemJumpPerClick: number = 4;
  indexFirstHourlyWeatherItem: number = 0;



  scrollLeft(): void {
    if (this.indexFirstHourlyWeatherItem > 0) {
      this.translateX += 100;
      this.indexFirstHourlyWeatherItem -= this.itemJumpPerClick;
    }
  }

  scrollRight(): void {
    if (this.indexFirstHourlyWeatherItem < 20) {
      this.translateX -= 100;
      this.indexFirstHourlyWeatherItem += this.itemJumpPerClick;
    }
  }

  scrollToStart(): void {
    this.translateX += (100 * this.indexFirstHourlyWeatherItem / 4);
    this.indexFirstHourlyWeatherItem = 0;
  }

  getFormattedTime(timestamp: number): string {
    return Utilities.getFormattedTime(timestamp);
  }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  getWeatherData(cityName: string): void {
    this.weatherService.getWeatherData(cityName).subscribe(
      response => {
        if (response) {
          this.weatherData = response;
          this.cityName = cityName;
          this.scrollToStart();
          console.log(response);
        }
      }
    );
  }
}
