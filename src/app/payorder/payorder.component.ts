import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-savings-transaction',
  templateUrl: './payorder.component.html',
})
export class PayorderComponent implements OnInit {

  account:string;
  toacc:string;
  frequency:string;
  day:string;
  ammount:string;

  savingsAccList: Object[];

  constructor(private route: ActivatedRoute, private userService: UserService) {
    // this.route.params.forEach((params: Params) => {
    //   this.username = params['username'];
    // });
    this.getSavingsTransactionList();
  }

  getSavingsTransactionList() {
    this.userService.getAccountList().subscribe(
        res => {
          console.log(JSON.parse(JSON.stringify(res))._body);
          this.savingsAccList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        },
        error => console.log(error)
    )
  }

  addPayOrder() {
    this.userService.addPayorderItem(this.account, this.toacc, this.ammount, this.day, this.frequency).subscribe(
      res => {
        console.log(JSON.parse(JSON.stringify(res))._body);
        this.savingsAccList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
      },
      error => console.log(error)
    )
  }

  ngOnInit() {}
}
