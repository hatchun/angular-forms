import { IKeyedValidationErrorMapper } from './IKeyedValidationErrorMapper';

export class RequiredValidatorMapper implements IKeyedValidationErrorMapper {
    public key = 'required';

    public map(): string {
        return 'This field is required. Pleas enter a value.';
    }
}
