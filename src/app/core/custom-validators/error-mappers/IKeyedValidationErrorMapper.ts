import { IValidationErrorMapper } from './IValidationErrorMapper';

export abstract class IKeyedValidationErrorMapper implements IValidationErrorMapper {
    public readonly key: string;

    public abstract map(error?: any): string;
}
