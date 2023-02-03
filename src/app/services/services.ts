import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';
import { LocationData } from '../models/location.model';
import { map, of, switchMap } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class Services {

  constructor(private http: HttpClient) { }

  getCoordinates(cityName: string): Observable<LocationData> {
    return this.http.get<LocationData>(`${environment.geoCodingApiBaseUrl}q=${cityName}&appid=${environment.apiKey}`);
  }

  getWeatherData(city: string): Observable<any> {
    return (this.getCoordinates(city)).pipe(
      map(res => {
        if (!res) {
          throw new Error('result === null');
        }
        return res[0];
      }),
      switchMap(location => {
        if (!location) {
          throw new Error('Location not found');
        }
        return this.http.get<WeatherData>(`${environment.oneCallApiBaseUrl}lat=${location.lat}&lon=${location.lon}&appid=${environment.apiKey}`);
      }),
      catchError(error => {
        console.error(error.message);
        return of(null);
      })
    );
  }
}
