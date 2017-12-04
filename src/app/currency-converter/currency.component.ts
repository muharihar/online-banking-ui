import { Component, OnInit } from '@angular/core';
import {GenericService} from '../gneric.service';
import {UserService} from '../user.service';


@Component({
  selector: 'app-appointment',
  templateUrl: './currency.component.html',
})
export class CurrencyComponent implements OnInit {

  account:string;
  provider:string;
  amount:string;
  billno:string;

  savingsAccList: Object[];

  constructor(private currencyService: GenericService) {
    //this.getSavingsTransactionList();
  }


  ngOnInit() {}

}
