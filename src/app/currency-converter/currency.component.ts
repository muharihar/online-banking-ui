import { Component, OnInit } from '@angular/core';
import {GenericService} from '../gneric.service';
import {UserService} from '../user.service';


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

  constructor(private currencyService: GenericService) {
    //this.getSavingsTransactionList();
  }


  getCurrency() {
    this.currencyService.getCurrency(this.from, this.to, this.fromamount).subscribe(
      res => {
        console.log(JSON.parse(JSON.stringify(res))._body);
        this.currency = JSON.parse(JSON.parse(JSON.stringify(res))._body);
      },
      error => console.log(error),
      () => {
        location.reload();
      }
    )
}

  ngOnInit() {
  this.getCurrency();
  }

}
