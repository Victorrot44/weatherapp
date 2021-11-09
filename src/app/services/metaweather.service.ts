import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient }  from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MetaweatherService {

  private API_HELPER_PROXY: string = "https://api.allorigins.win/raw?url=";
  private API_METAWEATHER: string  = "https://www.metaweather.com/api/";
  /**
   * Location Search
   * - Location search by city name  API_METAWEATHER + "location/search/?query=(query)"
   * - Location search by coordinates  API_METAWEATHER + "location/search/?lattlong=(latt),(long)"
   * Get Data Weather
   * - API_METAWEATHER + location/(woeid)/
   */

  constructor(private http: HttpClient) { }

  public searchCity(city: string): Observable<any> {
    return this.http.get(this.API_HELPER_PROXY + this.API_METAWEATHER + "location/search/?query=" + city);
  }

  public searchCoordinates(latitude: number, longitude: number): Observable <any> {
    return this.http.get(this.API_HELPER_PROXY + this.API_METAWEATHER + "location/search/?lattlong=" + latitude + "," + longitude);
  }

  public getDataWeather (woeid: number): Observable<any> {
    return this.http.get(this.API_HELPER_PROXY + this.API_METAWEATHER + "location/" + woeid);
  }
}
