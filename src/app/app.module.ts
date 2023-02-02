import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpperDataComponent } from './components/upper-data/upper-data.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CurrentWeatherMoreInfoComponent } from './components/current-weather-more-info/current-weather-more-info.component';
import { HourlyWeatherComponent } from './components/hourly-weather/hourly-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    UpperDataComponent,
    SearchbarComponent,
    CurrentWeatherMoreInfoComponent,
    HourlyWeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
