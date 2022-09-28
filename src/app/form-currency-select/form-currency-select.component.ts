import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Component, Input, ChangeDetectorRef, forwardRef } from '@angular/core';

@Component({
  selector: 'app-form-currency-select',
  templateUrl: './form-currency-select.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormCurrencySelectComponent),
      multi: true,
    },
  ],
})
export class FormCurrencySelectComponent implements ControlValueAccessor {
  @Input() value: number;

  OnChange!: (value: number) => void;
  onTouched!: () => void;

  constructor(readonly changeDetector: ChangeDetectorRef) {}

  onInputValueChange(event: Event) {
    this.value = Number((event.target as HTMLInputElement).value);
    this.OnChange(this.value)
  }

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.OnChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
