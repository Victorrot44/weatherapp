import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent implements OnInit {

  @Input() humidity!: number;
  @Input() visibility!: number;
  @Input() air !: number;
  @Input() wind !: number;
  @Input() windDirection !: number;

  constructor() { }

  ngOnInit(): void { }

  rounded (number: number){
    return Math.round(number);
  }

}
