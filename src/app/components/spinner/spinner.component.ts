import { Component, OnInit,  } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent{
  isLoading$ = this.spinnerServices.isLoading$;
  constructor(private spinnerServices: SpinnerService) { }
}
