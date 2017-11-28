import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-history',
  templateUrl: 'history.component.html',
})
export class HistoryComponent implements OnInit {

  username:string;
  accountTransactionList: Object[];

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.getAccountHistoryList();
  }

  getAccountHistoryList() {
    this.userService.getAccountHistory().subscribe(
        res => {
          console.log(JSON.parse(JSON.stringify(res))._body);
          this.accountTransactionList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        },
        error => console.log(error)
    )
  }

  ngOnInit() {}
}
