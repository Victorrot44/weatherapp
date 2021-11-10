import { Component, EventEmitter, Output } from '@angular/core';
import { MetaweatherService } from 'src/app/services/metaweather.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent{

  @Output() woeid = new EventEmitter<number>();

  listCities  : any[] = [];

  constructor(private weather: MetaweatherService) { }

  search(city: string){
    this.weather.searchCity(city).subscribe( data => {
      this.listCities = data;
    });
  }

  getWoeid(woeid : number) {
    console.log("Woeid", woeid);

    this.woeid.emit(woeid);
  }
}
