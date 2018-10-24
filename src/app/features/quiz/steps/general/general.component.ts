import { Component, OnInit } from '@angular/core';
import { BaseStepComponent } from '../base-step.component';
import { CustomValidators } from '@app/core/custom-validators/custom-validators';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent extends BaseStepComponent implements OnInit {
  ngOnInit(): void {
    this.model.setValidators(CustomValidators.multiselectRequiredValidator());
  }

  constructor() {
    super();
  }

}
