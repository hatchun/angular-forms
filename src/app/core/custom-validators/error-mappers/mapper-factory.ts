import { IKeyedValidationErrorMapper } from './IKeyedValidationErrorMapper';
import { Inject } from '@angular/core';
import { IValidationErrorMapper } from './IValidationErrorMapper';

export class MapperFactory {
    constructor(
        @Inject(IKeyedValidationErrorMapper) private readonly mappers: IKeyedValidationErrorMapper[],
        private readonly defaultMapper: IValidationErrorMapper
    ) {}

    public getValidationErrorMapper (key: string) {
        return this.mappers.find(m => m.key === key) || this.defaultMapper;
    }
}
