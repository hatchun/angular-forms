import { AbstractControl, ValidatorFn } from '@angular/forms';

export abstract class BaseValidator<TValue> {
    protected constructor(
        private readonly errorKey: string
    ) { }

    public get validatorFunction(): ValidatorFn {
        return (c: AbstractControl) => {
            return this.hasErrors(c) ?
                { [this.errorKey]: this.getErrorMessage(c) } :
                null;
        };
    }

    protected getTypedValue(control: AbstractControl): TValue {
        return control.value as TValue;
    }

    protected abstract getErrorMessage(control: AbstractControl): string;

    protected abstract isValid(value: TValue): boolean;

    private hasErrors(control: AbstractControl): boolean {
        return !this.isValid(this.getTypedValue(control));
    }
}
