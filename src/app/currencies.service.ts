import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T][];

export interface IResponse {
  lastupdate: string;
  rates: ICard;
  table: string;
}

export interface ICard {
  [key: string]: number;
}

@Injectable({ providedIn: 'root' })
export class CurrenciesService {
  constructor(private http: HttpClient) {}

  getCurrencies() {
    return this.http.get<IResponse>('https://cdn.cur.su/api/latest.json');
  }
}
