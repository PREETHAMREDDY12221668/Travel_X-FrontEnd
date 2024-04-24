import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})
export class WeatherWidgetMainComponent implements OnInit, OnChanges {
  @Input() latitude!: number; // Input property to accept latitude
  @Input() longitude!: number; // Input property to accept longitude
  WeatherData: any;

  constructor() { }

  ngOnInit() {
    this.WeatherData = {
      main: {},
      isDay: true
    };
    this.getWeatherData();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['latitude'] || changes['longitude']) {
      this.getWeatherData();
    }
  }

  getWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&appid=dccc9215471e60eb053b020721b01b98`)
      .then(response => response.json())
      .then(data => { this.setWeatherData(data); });
  }

  setWeatherData(data: any) {
    this.WeatherData = data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = currentDate.getTime() < sunsetTime.getTime();
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);
  }
}
