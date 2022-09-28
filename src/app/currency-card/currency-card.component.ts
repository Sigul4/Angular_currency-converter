import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CardServiceMethods } from './currency-card.service';

@Component({
  selector: 'app-currency-card',
  templateUrl: './currency-card.component.html',
})
export class CurrencyCardComponent implements OnInit {
  @Input() currenciesCoefs: Array<number>;

  constructor(public cardServiceMethods: CardServiceMethods) {}

  firstSelectCoefficient: number;
  secondSelectCoefficient: number;
  coefficient: number;
  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      firstValueInput: new FormControl(),
      secondValueInput: new FormControl(0),
      firstCurrencySelect: new FormControl(0),
      secondCurrencySelect: new FormControl(1),
    });
    this.formGroup.valueChanges.subscribe((e) => {});
    this.firstSelectCoefficient =
      this.currenciesCoefs[this.formGroup.value.firstCurrencySelect];
    this.secondSelectCoefficient =
      this.currenciesCoefs[this.formGroup.value.secondCurrencySelect];
    this.coefficient = this.cardServiceMethods.setCoefficient(
      this.firstSelectCoefficient,
      this.secondSelectCoefficient,
    );
  }

  firstSelectHandler(value: number) {
    this.firstSelectCoefficient = this.currenciesCoefs[value];
    this.coefficient = this.cardServiceMethods.setCoefficient(
      this.firstSelectCoefficient,
      this.secondSelectCoefficient
    );
    this.cardServiceMethods.firstInputHandler(this.formGroup, this.coefficient);
  }

  secondSelectHandler(value: number) {
    this.secondSelectCoefficient = this.currenciesCoefs[value];
    this.coefficient = this.cardServiceMethods.setCoefficient(
      this.firstSelectCoefficient,
      this.secondSelectCoefficient
    );
    this.cardServiceMethods.firstInputHandler(this.formGroup, this.coefficient);
  }

  swapCurrencies() {
    this.firstSelectHandler(this.formGroup.value.secondCurrencySelect);
    this.secondSelectHandler(this.formGroup.value.firstCurrencySelect);

    const middleValue = this.formGroup.value.firstCurrencySelect;
    this.formGroup.get('firstCurrencySelect')?.setValue(this.formGroup.value.secondCurrencySelect);
    this.formGroup.get('secondCurrencySelect')?.setValue(middleValue);
  }
}
