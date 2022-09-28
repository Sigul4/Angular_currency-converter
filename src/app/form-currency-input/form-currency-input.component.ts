import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectorRef,
  forwardRef,
} from '@angular/core';

@Component({
  selector: 'app-form-currency-input',
  templateUrl: './form-currency-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormCurrencyInputComponent),
      multi: true,
    },
  ],
})
export class FormCurrencyInputComponent implements ControlValueAccessor {
  @Input() value: number | undefined = 2;

  OnChange!: (value: number) => void;
  onTouched!: () => void;

  constructor(readonly changeDetector: ChangeDetectorRef) {}

  onInputValueChange(event: Event) {
    this.OnChange(Number((event.target as HTMLInputElement).value));
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
