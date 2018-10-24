import { Component } from '@angular/core';
import { BaseStepComponent } from '../base-step.component';

@Component({
  selector: 'app-happiness',
  templateUrl: './happiness.component.html',
  styleUrls: ['./happiness.component.scss']
})
export class HappinessComponent extends BaseStepComponent {

  constructor() {
    super();
   }

}
