import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { LocationData } from '../models/location.model';
import { map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Services {

  constructor(private http: HttpClient) { }

  getCoordinates(cityName: string): Observable<LocationData> {
    return this.http.get<LocationData>(`${environment.geoCodingApiBaseUrl}q=${cityName}&appid=${environment.apiKey}`);
  }


  getWeatherData(city: string): Observable<WeatherData> {
    return this.getCoordinates(city).pipe(

      map(res => (res[0])),
      switchMap(location => {
        return this.http.get<WeatherData>(`${environment.oneCallApiBaseUrl}lat=${location.lat}&lon=${location.lon}&appid=${environment.apiKey}`);
      })
    );
  }
}
