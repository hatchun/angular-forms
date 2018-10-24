import { FormGroup, FormArray } from '@angular/forms';
import { Input } from '@angular/core';

export abstract class BaseStepComponent {
    @Input() public model: FormGroup | FormArray;
}

