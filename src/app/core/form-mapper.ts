import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';

export class FormMapper {
    public createGroup<TItem>(item: TItem): FormGroup {
        const result = new FormGroup({});
        for (const [key, value] of Object.entries(item)) {
            result.addControl(key, this.createControlFor(value));
        }

        return result;
    }

    public createArray<TItem>(items: TItem[]): FormArray {
        return new FormArray(items.map(v => this.createControlFor(v)));
    }

    public createControl<TItem>(item: TItem): FormControl {
        return new FormControl(item);
    }

    private createControlFor<TItem>(item: TItem): AbstractControl {
        let result: AbstractControl;
        if (Array.isArray(item)) {
            result = this.createArray(item);
        } else if (this.isPrimitive(item)) {
            result = this.createControl(item);
        } else {
            return this.createGroup(item);
        }

        return result;
    }

    private isPrimitive<TValue>(value: TValue): boolean {
        return (value instanceof Date) || (value !== Object(value));
    }
}
