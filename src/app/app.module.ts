import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru-UA'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrencyCardComponent } from './currency-card/currency-card.component';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(localeRu, 'ru')

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CurrencyCardComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,ListComponent,CurrencyCardComponent]
})
export class AppModule { }
