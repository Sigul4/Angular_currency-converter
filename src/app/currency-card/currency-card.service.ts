import { FormGroup } from '@angular/forms';
import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class CardServiceMethods {
  constructor() {}

  public firstInputHandler(formGroup: FormGroup, coefficient:number) {
    formGroup
      .get('secondValueInput')
      ?.setValue(
        Math.round(
          (formGroup.value.firstValueInput / coefficient) * 100
        ) / 100
      );
  }

  public secondInputHandler(formGroup: FormGroup, coefficient:number) {
    formGroup
      .get('firstValueInput')
      ?.setValue(
        Math.round(
          formGroup.value.secondValueInput * coefficient * 100
        ) / 100
      );
  }

  public setCoefficient(firstCoef: number, secondCoef: number) {
    return firstCoef / secondCoef;
  }
}
