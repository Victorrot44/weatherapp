import { Component, OnInit } from '@angular/core';
import { MetaweatherService } from './services/metaweather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public latitude    : any;
  public longitude   : any;
  public woeid       : any;
  public dataWeather : any = {};

  public date  = new Date();
  public year  = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(this.date);
  public month = new Intl.DateTimeFormat('en', { month: 'numeric' }).format(this.date);
  public day   = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(this.date);

  public today : string = `${this.year}-${this.month}-${this.day}`;

  constructor(private weather: MetaweatherService) { }

  ngOnInit(): void {
    this.getUserLocation();
  }

  getUserLocation() {
    if (navigator.geolocation) {

      navigator.geolocation.getCurrentPosition(
        (position) => {
            this.latitude  = position.coords.latitude;
            this.longitude = position.coords.longitude;
            this.searchUbication(this.latitude, this.longitude);
        }
      );

    } else {
      // Colocar un mensaje de alerta cuadno no funciones
      console.log("User not allow");
    }
  }

  searchUbication(latitude: number, longitude: number){
    this.weather.searchCoordinates(latitude, longitude).subscribe(ubicacion => {
      this.woeid = ubicacion[0].woeid;
      this.getDataWeather(this.woeid);
    });
  }

  getDataWeather(woeid: number) {
    this.weather.getDataWeather(woeid).subscribe(data => {
      console.log(data);
      let result = [];
      let todayNow = {};
      let ubicacionNow = data.title || '' ;
      for (let i = 0; i < data.consolidated_weather.length; i++) {
        if (data.consolidated_weather[i].applicable_date == this.today ) {
          todayNow = {
            air_pressure           : data.consolidated_weather[i].air_pressure,
            applicable_date        : data.consolidated_weather[i].applicable_date,
            humidity               : data.consolidated_weather[i].humidity,
            max_temp               : data.consolidated_weather[i].max_temp,
            min_temp               : data.consolidated_weather[i].min_temp,
            predictability         : data.consolidated_weather[i].predictability,
            the_temp               : data.consolidated_weather[i].the_temp,
            visibility             : data.consolidated_weather[i].visibility,
            weather_state_abbr     : data.consolidated_weather[i].weather_state_abbr,
            weather_state_name     : data.consolidated_weather[i].weather_state_name,
            wind_direction         : data.consolidated_weather[i].wind_direction,
            wind_direction_compass : data.consolidated_weather[i].wind_direction_compass,
            wind_speed             : data.consolidated_weather[i].wind_speed
          }
        } else {
          result.push(data.consolidated_weather[i]);

        }
      }

      this.dataWeather = {
        ubication: ubicacionNow,
        today: todayNow,
        result : result
      }
    });
  }
}
