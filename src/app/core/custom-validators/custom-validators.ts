import { ValidatorFn } from '@angular/forms';
import { MultiselectRequiredValidator, OneWordValidator } from './';

export class CustomValidators {
    public static multiselectRequiredValidator(): ValidatorFn {
        return new MultiselectRequiredValidator().validatorFunction;
    }
    public static oneWordValidator(): ValidatorFn {
        return new OneWordValidator().validatorFunction;
    }
}
