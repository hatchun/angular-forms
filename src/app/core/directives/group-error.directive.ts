import { MapperFactory } from './../custom-validators/error-mappers/mapper-factory';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { BaseErrorDirective } from './base-error.directive';
import { AbstractControl } from '@angular/forms';

@Directive({
  selector: '[appGroupError]'
})
export class GroupErrorDirective extends BaseErrorDirective implements OnInit {

  @Input() public formControlRef: AbstractControl;

  constructor(
    mapperFactory: MapperFactory,
    el: ElementRef,
  ) {
    super(mapperFactory, el, null);
  }

  ngOnInit() {
    this.control = this.formControlRef;
    super.ngOnInit();
  }
}
