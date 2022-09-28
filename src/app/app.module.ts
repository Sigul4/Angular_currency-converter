import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru-UA';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrencyCardComponent } from './currency-card/currency-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormCurrencySelectComponent } from './form-currency-select/form-currency-select.component';
import { FormCurrencyInputComponent } from './form-currency-input/form-currency-input.component';

registerLocaleData(localeRu, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CurrencyCardComponent,
    FormCurrencySelectComponent,
    FormCurrencyInputComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
