import { HttpClientModule } from '@angular/common/http';
import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

export interface ICard {
  [key: string]: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  res: any;
  allCurs: any;

  constructor(private http: HttpClient){

  } 

  ngOnInit(){
    this.http.get('https://cdn.cur.su/api/latest.json')
    .subscribe((res) => {
      this.res = res
      this.allCurs = this.res.rates
      this.res = Object.entries(this.res.rates)
      console.log(this.res)
      console.log(this.allCurs)
    })
  }

}
