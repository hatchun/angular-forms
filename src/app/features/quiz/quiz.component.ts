import { FormMapper } from './../../core/form-mapper';
import { FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  private model: any[];
  public form: FormArray;
  private _currentStepIndex: number;
  constructor() {
    const generalModel = [
      {
        name: 'test1',
        selected: true
      },
      {
        name: 'test2',
        selected: false
      }
    ];

    const happinessModel = {
      range: 50
    };

    const bestWordModel = {
      label: 'Enter a word',
      value: undefined
    };

    this.model = [
      generalModel,
      happinessModel,
      bestWordModel
    ];
  }

  ngOnInit() {
    this.form = new FormMapper().createArray(this.model);
    this._currentStepIndex = 0;
  }

  public isCurrentStep(index: number) {
    return this._currentStepIndex === index;
  }

  public nextStep() {
    this._currentStepIndex++;
  }

  public previousStep() {
    this._currentStepIndex--;
  }

  public get hasNextStep() {
    return !!this.model && this._currentStepIndex < this.form.length - 1;
  }

  public get hasPreviousStep() {
    return this._currentStepIndex > 0;
  }
}
