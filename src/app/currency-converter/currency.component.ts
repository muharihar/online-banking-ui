import { Component, OnInit } from '@angular/core';
import {GenericService} from '../gneric.service';
import {UserService} from '../user.service';
import {AlertService} from '../alert.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './currency.component.html',
})
export class CurrencyComponent implements OnInit {

  to:string;
  from:string;
  fromamount:string;
  toamount:string;


  currency: Object[];

  constructor(private currencyService: GenericService, private alertService: AlertService) {
    this.getExchangeRate();
    this.fromamount = "1";
  }


  getCurrency() {
    this.currencyService.getCurrency(this.from, this.to, this.fromamount).subscribe(
      res => {
        //console.log(JSON.parse(JSON.stringify(res))._body);
        this.currency = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        this.toamount = this.currency["exchangeRateValue"];
        this.onSuccess("Exchanged value is " + this.toamount);
        location.reload();
      },
      error => console.log(error),
      () => {
        //location.reload();

      }
    )
  }


  getExchangeRate() {
    this.currencyService.getExchangeRate("USD", "LKR").subscribe(
      res => {
        console.log(JSON.parse(JSON.stringify(res))._body);
        this.currency = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        //this.onSuccess("Successfully Added the PO!!!");

      },
      error => console.log(error),
      () => {
        //location.reload();
        //this.onSuccess("Successfully Added the PO!!!");
      }

    )
  }

  onError(message: string) {
    this.alertService.error(message);
  }
  onSuccess(message: string){
    this.alertService.success(message);
  }

  ngOnInit() {

  }

}