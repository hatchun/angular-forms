import { BaseValidator } from '@app/core/custom-validators/base.validator';

export class OneWordValidator extends BaseValidator<string> {
    public static key = 'one-word';

    public constructor() {
        super(OneWordValidator.key);
    }

    protected isValid(input: string): boolean {
        return !input || input.trim().split(' ').length === 1;
    }

    protected getErrorMessage(): string {
        return 'Only one word is allowed.';
    }
}
