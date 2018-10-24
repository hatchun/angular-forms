import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralComponent } from './general.component';
import { FormMapper } from '@app/core';
import { GroupErrorDirective } from '@app/core/directives';
import {
  IKeyedValidationErrorMapper,
  RequiredValidatorMapper,
  IValidationErrorMapper,
  DefaultErrorMapper,
  MapperFactory
} from '@app/core/custom-validators';

describe('GeneralComponent', () => {
  let component: GeneralComponent;
  let fixture: ComponentFixture<GeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeneralComponent, GroupErrorDirective],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: IKeyedValidationErrorMapper, multi: true, useClass: RequiredValidatorMapper },
        { provide: IValidationErrorMapper, useClass: DefaultErrorMapper },
        { provide: MapperFactory, useClass: MapperFactory }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralComponent);
    component = fixture.componentInstance;
    component.model = new FormMapper().createArray([
      {
        name: 'test1',
        selected: true
      },
      {
        name: 'test2',
        selected: false
      }
    ]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
