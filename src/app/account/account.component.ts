import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'account-transaction',
  templateUrl: 'account.component.html',
})
export class AccountComponent implements OnInit {

  username:string;
  savingsTransactionList: Object[];
  accountList: Object[];

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.forEach((params: Params) => {
      this.username = params['username'];
    });

    this.getSavingsAccountList();
  }

  getSavingsAccountList() {
    this.userService.getAccountList().subscribe(
        res => {
          console.log(JSON.parse(JSON.stringify(res))._body);
          this.accountList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        },
        error => console.log(error)
    )
  }

  ngOnInit() {}
}
