import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather.model';

@Component({
  selector: 'app-upper-data',
  templateUrl: './upper-data.component.html',
  styleUrls: ['./upper-data.component.css']
})
export class UpperDataComponent {
  @Input() cityName?: string;
  @Input() weatherData?: WeatherData;
}
