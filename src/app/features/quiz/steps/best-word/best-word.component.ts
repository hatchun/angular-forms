import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BaseStepComponent } from '../base-step.component';
import { Validators, FormGroup } from '@angular/forms';
import { CustomValidators } from '@app/core/custom-validators/custom-validators';

@Component({
  selector: 'app-best-word',
  templateUrl: './best-word.component.html',
  encapsulation: ViewEncapsulation.None
})
export class BestWordComponent extends BaseStepComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
    (this.model as FormGroup).controls.value.setValidators([Validators.required, CustomValidators.oneWordValidator()]);
  }
}
