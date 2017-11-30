import { Component, OnInit } from '@angular/core';
import {UtilityService} from '../utility.service';
import {UserService} from '../user.service';


@Component({
  selector: 'app-appointment',
  templateUrl: './utility.component.html',
})
export class UtilityComponent implements OnInit {

  account:string;
  provider:string;
  amount:string;
  billno:string;

  savingsAccList: Object[];

  constructor(private utilityService: UtilityService) {
    this.getSavingsTransactionList();
  }


  getSavingsTransactionList() {
    this.utilityService.getAccountList().subscribe(
        res => {
          console.log(JSON.parse(JSON.stringify(res))._body);
          this.savingsAccList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        },
        error => console.log(error)
    )
  }

  payUtilityBill() {
    this.utilityService.payUtilityBill(this.account, this.provider, this.billno, this.amount).subscribe(
      res => {
        console.log(JSON.parse(JSON.stringify(res))._body);
        this.savingsAccList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
      },
      error => console.log(error),
      () => {
        location.reload();
      }
    )
  }


  ngOnInit() {}
}
