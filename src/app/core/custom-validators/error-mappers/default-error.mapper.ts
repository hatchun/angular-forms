import { IValidationErrorMapper } from './IValidationErrorMapper';

export class DefaultErrorMapper extends IValidationErrorMapper {
    public map(error: any): string {
        return typeof error === 'string' ? error : JSON.stringify(error);
    }
}
