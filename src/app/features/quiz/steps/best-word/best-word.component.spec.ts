import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestWordComponent } from './best-word.component';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormMapper } from '@app/core';

describe('BestWordComponent', () => {
  let component: BestWordComponent;
  let fixture: ComponentFixture<BestWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BestWordComponent],
      imports: [ReactiveFormsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestWordComponent);
    component = fixture.componentInstance;
    component.model = new FormMapper().createGroup({
      label: 'Enter a word',
      value: undefined
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
