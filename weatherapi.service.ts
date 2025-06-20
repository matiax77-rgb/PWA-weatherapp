import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Root } from '../ApiResponse/root';
import { Weather } from '../Result/weather';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService {
  constructor(private http: HttpClient) { }

  units: string = '';
  baseUrl: string = 'https://api.openweathermap.org/data/2.5/weather';
  appid: string = `&appid=${environment.API_KEY}`;
  url2 = '&units=metric';

  getWeatherFromLatLong(lat: number, lng: number): Observable<Weather> {
    this.url2 = this.units == 'farenheit' ? '&units=imperial' : '&units=metric';
    const link = `${this.baseUrl}?lat=${lat}&lon=${lng}${this.appid}${this.url2}`;
    return this.http.get<Root>(link).pipe(map(result => this.mapToWeather(result)));
  }

  getWeatherFromCity(city: string): Observable<Weather> {
    this.url2 = this.units == 'farenheit' ? '&units=imperial' : '&units=metric';
    const link = `${this.baseUrl}?q=${city}${this.appid}${this.url2}`;
    return this.http.get<Root>(link).pipe(map(result => this.mapToWeather(result)));
  }

  private mapToWeather(result: Root): Weather {
    return {
      description: result.weather[0].main,
      icon: result.weather[0].icon,
      name: result.name,
      feel_like: result.main.feels_like,
      max_temp: result.main.temp_max,
      min_temp: result.main.temp_min,
      temp: result.main.temp,
      speed: result.wind.speed
    } as Weather;
  }
}
