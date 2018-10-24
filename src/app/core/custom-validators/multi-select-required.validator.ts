import { BaseValidator } from '@app/core/custom-validators/base.validator';

export class MultiselectRequiredValidator extends BaseValidator<any[]> {
    public static key = 'multi-select-required';

    public constructor() {
        super(MultiselectRequiredValidator.key);
    }

    protected isValid(formArray: any[]): boolean {
        return (formArray instanceof Array) && formArray.some(c => c.selected);
    }

    protected getErrorMessage(): string {
        return 'At least one value should be selected from the list.';
    }
}
