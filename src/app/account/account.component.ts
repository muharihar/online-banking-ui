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

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.forEach((params: Params) => {
      this.username = params['username'];
    });

    //this.getSavingsTransactionList();
  }

  getSavingsAccountList() {
    // this.userService.getSavingsTransactionList(this.username).subscribe(
    //     res => {
    //       console.log(JSON.parse(JSON.stringify(res))._body);
    //       this.savingsTransactionList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
    //     },
    //     error => console.log(error)
    // )
  }

  ngOnInit() {}
}
