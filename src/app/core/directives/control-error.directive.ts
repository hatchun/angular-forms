import { MapperFactory } from './../custom-validators/error-mappers/mapper-factory';
import { Directive, ElementRef } from '@angular/core';
import { BaseErrorDirective } from './base-error.directive';
import { NgControl } from '@angular/forms';

@Directive({
  selector: 'input [appError]'
})
export class ControlErrorDirective extends BaseErrorDirective {

  constructor(
    mapperFactory: MapperFactory,
    el: ElementRef,
    control: NgControl
  ) {
    super(mapperFactory, el, control);
  }
}
