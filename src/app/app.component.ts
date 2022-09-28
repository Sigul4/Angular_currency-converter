import { Component, OnInit } from '@angular/core';
import {
  CurrenciesService,
  Entries,
  ICard,
  IResponse
} from './currencies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public Currencies: Entries<ICard>;
  public response: IResponse;
  public allCurs: ICard;
  public UAH: string;
  public USD: string;
  public EUR: string;
  public CurrenciesCoefs: Array<number>;

  constructor(private currenciesService: CurrenciesService) {}

  ngOnInit() {
    this.currenciesService.getCurrencies().subscribe((res) => {
      this.response = res;
      this.allCurs = this.response.rates;
      this.Currencies = Object.entries(this.response.rates);
      this.USD = this.allCurs.UAH.toFixed(2);
      this.EUR = (this.allCurs.UAH / this.allCurs.EUR).toFixed(2);
      this.CurrenciesCoefs = [
        this.allCurs.USD,
        this.allCurs.UAH,
        this.allCurs.EUR,
        this.allCurs.PLN,
      ];
    });
  }
}
