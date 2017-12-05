import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { ActivatedRoute, Params } from '@angular/router';
import {AlertService} from '../alert.service';


@Component({
  selector: 'app-savings-transaction',
  templateUrl: './poview.component.html',
})
export class PayorderViewComponent implements OnInit {

  payorderList: Object[];

  constructor(private route: ActivatedRoute, private userService: UserService, private alertService: AlertService) {
    this.getPayOrderList();
  }
  onError(message: string) {
    this.alertService.error(message);
  }
  onSuccess(message: string){
    this.alertService.success(message);
  }

  getPayOrderList(){
    this.userService.getPayorderList().subscribe(
      res => {
        console.log(JSON.parse(JSON.stringify(res))._body);
        this.payorderList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
      },
      error => console.log(error)
    )
  }

  ngOnInit() {}
}
