import { Injectable } from '@angular/core';
import { Observable, of as ObservarbleOf } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable(
  {
    providedIn:
      'root'
  }
)
export class ColorService {

  // DUMMY SERVICE!

  private readonly _validColors = [
    'green',
    'blue',
    'yellow'
  ];

  isColorValid(color: string): Observable<boolean> {
    const result = this._validColors.every(clr => clr === color);
    return ObservarbleOf(result).pipe(
      delay(2500)
    );
  }

  getColors(): Observable<string[]> {
    return ObservarbleOf(this._validColors);
  }
}
