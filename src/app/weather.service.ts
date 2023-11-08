import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getweather() {
    return this.http.get(
      'https://api.weatherapi.com/v1/current.json?key=0721bd887fd34d4e8af72238230811&q=bokaro'
    );
  }
}
