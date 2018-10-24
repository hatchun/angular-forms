import { GroupErrorDirective, ControlErrorDirective } from './directives';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IKeyedValidationErrorMapper,
  RequiredValidatorMapper,
  IValidationErrorMapper,
  DefaultErrorMapper,
  MapperFactory
} from './custom-validators';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ControlErrorDirective, GroupErrorDirective],
  exports: [ControlErrorDirective, GroupErrorDirective]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: IKeyedValidationErrorMapper, multi: true, useClass: RequiredValidatorMapper },
        { provide: IValidationErrorMapper, useClass: DefaultErrorMapper },
        { provide: MapperFactory, useClass: MapperFactory }
      ],
    };
  }
}
