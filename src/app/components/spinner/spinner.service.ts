import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  isLoading$ = new Subject<boolean>();

  // Show spinner overlay
  show(): void {
    this.isLoading$.next(true);
  }

  // Hide spinner overlay
  hide(): void {
    this.isLoading$.next(false);
  }

}
