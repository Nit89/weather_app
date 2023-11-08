import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  myWeather: any;
  temperature: number = 0;
  feelsliketemp: number = 0;
  humidity: number = 0;
  pressure: number = 0;
  summary: string = '';
  iconUrl: string = '';

  constructor(private weatherService: WeatherService) {}
  ngOnInit(): void {
    this.weatherService.getweather().subscribe({
      next: (res) => {
        this.myWeather = res;
        this.temperature = this.myWeather.current.temp_c;
        this.feelsliketemp = this.myWeather.current.feelslike_c;
        (this.pressure = this.myWeather.current.pressure_mb),
          (this.humidity = this.myWeather.current.humidity),
          (this.summary = this.myWeather.current.condition.text);
        this.iconUrl = this.myWeather.current.condition.icon;
      },
      error: (error) => console.log(error.message),
      complete() {
        console.log('api call completed');
      },
    });
  }
}
