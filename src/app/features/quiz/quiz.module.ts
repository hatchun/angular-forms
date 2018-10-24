import { QuizComponent } from './quiz.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './steps';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HappinessComponent } from './steps/happiness/happiness.component';
import { BestWordComponent } from './steps/best-word/best-word.component';
import { CoreModule } from '@app/core/core.module';

@NgModule({
  imports: [
    CoreModule.forRoot(),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [GeneralComponent, QuizComponent, HappinessComponent, BestWordComponent],
  exports: [GeneralComponent, QuizComponent]
})
export class QuizModule { }
