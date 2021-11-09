import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-days-weather',
  templateUrl: './list-days-weather.component.html',
  styleUrls: ['./list-days-weather.component.scss']
})
export class ListDaysWeatherComponent implements OnInit {

  @Input() weather : any = { };

  constructor() { }

  ngOnInit(): void {

  }

  rounded (number: any){
    return Math.round(number);
  }
}
