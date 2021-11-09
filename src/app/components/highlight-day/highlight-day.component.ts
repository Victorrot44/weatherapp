import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-highlight-day',
  templateUrl: './highlight-day.component.html',
  styleUrls: ['./highlight-day.component.scss']
})
export class HighlightDayComponent implements OnInit {

  @Input() today: any;
  @Input() weather_state_name !: string;
  @Input() weather_state_abbreviation !: string;
  @Input() temperature!: number;
  @Input() ubication : string = "";

  constructor() { }

  ngOnInit(): void { }

  rounded (number: number){
    return Math.round(number);
  }
}
