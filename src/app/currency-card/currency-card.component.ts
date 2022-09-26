import { Component, Input, OnInit } from '@angular/core';
import { ICard } from '../app.component';

@Component({
  selector: 'app-currency-card',
  template: `
    <div>
      <input placeholder="From" type="number" #firstCurrencyInput  (input)="firstInputHandler(firstCurrencyInput.value)" [value]="firstValue"/>
      <select #firstCurrencyChoose (input)="firstSelectHandler(firstCurrencyChoose.value)" >
        <option selected="selected" value="0">USD</option>
        <option value="1">UAH</option>
        <option value="2">EUR</option>
        <option value="3">PLN</option>
      </select>
      <h1 style="text-align:center">👇👇👇</h1>
      <input placeholder="To" type="number" #secondCurrencyInput (input)="secondInputHandler(secondCurrencyInput.value)" [value]="secondValue"/>
      <select #secondCurrencyChoose (input)="secondSelectHandler(secondCurrencyChoose.value)" >
        <option value="0">USD</option>
        <option selected="selected" value="1">UAH</option>
        <option value="2">EUR</option>
        <option value="3">PLN</option>
      </select>
    </div>
  `,
})

export class CurrencyCardComponent implements OnInit {
  @Input() currenciesCoefs : Array<number>

  firstValue: number
  secondValue: number 
  firstSelect: number = 0
  secondSelect: number = 1
  coefficient: number 

  ngOnInit(){
    this.firstSelectHandler(this.firstSelect)
    this.secondSelectHandler(this.secondSelect)
  }

  firstInputHandler(value: any){
    this.firstValue = value
    this.secondValue = Math.round(value/this.coefficient*100)/100 
  }
  
  firstSelectHandler(value: any){
    this.firstSelect = this.currenciesCoefs[value]
    this.setCoefficient(this.firstSelect,this.secondSelect)
    this.firstInputHandler(this.firstValue)
  }
  
  secondInputHandler(value: any){
    this.secondValue = value
    this.firstValue = Math.round(value*this.coefficient*100)/100
  }
  
  secondSelectHandler(value: any){
    this.secondSelect = this.currenciesCoefs[value]
    this.setCoefficient(this.firstSelect,this.secondSelect)
    this.secondInputHandler(this.secondValue)
    
  }

  setCoefficient(firstCoef: number, secondCoef: number){
    this.coefficient = firstCoef / secondCoef
    // this.firstInputHandler(this.firstValue)
    // this.secondInputHandler(this.secondValue)
  }

  swapCurrecries(){
    const middleValue = this.secondInputHandler
    this.secondInputHandler = this.firstInputHandler
    this.firstInputHandler = middleValue
  }
}
