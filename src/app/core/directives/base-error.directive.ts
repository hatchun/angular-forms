import { MapperFactory } from '../custom-validators/error-mappers/mapper-factory';
import { Directive, ElementRef, OnInit, Input, OnDestroy } from '@angular/core';
import { NgControl, FormArray, AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { merge, fromEvent, Subscription } from 'rxjs';

@Directive({})
export abstract class BaseErrorDirective implements OnInit, OnDestroy {

  public static newLocal = 'validation-fail-feedback';
  private _activeSubscribtions: Subscription[];
  private _errorSpan: HTMLSpanElement;
  private get errorSpan() {
    return this._errorSpan || (this._errorSpan = this.createEmptyErrorElement());
  }

  public constructor(
    protected mapperFactory: MapperFactory,
    protected el: ElementRef,
    protected control: AbstractControl | NgControl
  ) {
    this._activeSubscribtions = [];
  }


  public ngOnInit(): void {
    const abstractControl = (this.control instanceof NgControl) ? this.control.control : this.control;
    this.toggleError(abstractControl);
    this.subscribeToValueChanges(abstractControl);
  }

  public ngOnDestroy(): void {
    this._activeSubscribtions.forEach(s => {
      if (!!s && !!s.unsubscribe) {
        s.unsubscribe();
      }
    });
  }

  private createEmptyErrorElement() {
    const attachedElement = document.createElement('span');
    attachedElement.classList.add(BaseErrorDirective.newLocal);
    attachedElement.style.display = 'none';
    this.el.nativeElement.after(attachedElement);
    return attachedElement;
  }

  private subscribeControls(control: AbstractControl) {
    if (control instanceof FormControl) {
      this.subscribeToValueChanges(control);
    }
    if (control instanceof FormGroup) {
      this.subscribeToValueChanges(control);
      Object.entries(control.controls).forEach(([k, v]) => this.subscribeControls(v));
    }
    if (control instanceof FormArray) {
      this.subscribeToValueChanges(control);
      control.controls.forEach(c => this.subscribeControls(c));
    }
  }

  private subscribeToValueChanges(control: AbstractControl) {
    this._activeSubscribtions.push(merge(control.statusChanges, fromEvent(this.el.nativeElement, 'blur'))
      .subscribe(() => this.toggleError(control)));
  }

  private showError(control: AbstractControl) {
    this.errorSpan.textContent = this.getErrorMessages(control);
    this.errorSpan.style.display = 'block';
  }

  private hideError() {
    this.errorSpan.textContent = '';
    this.errorSpan.style.display = 'none';
  }

  private getErrorMessages(control: AbstractControl): string {
    return (control.errors === null) ?
      '' :
      (Object.entries(control.errors)
        .map(([k, v]) => this.mapperFactory.getValidationErrorMapper(k).map(v))
        .join('\n')
      );
  }

  private toggleError(control: AbstractControl) {
    if (!control.valid && control.dirty && (!(control instanceof FormControl) || control.touched)) {
      this.showError(control);
    } else {
      this.hideError();
    }
  }
}
