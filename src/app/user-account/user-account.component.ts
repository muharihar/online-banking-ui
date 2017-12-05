import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SignupService} from '../signup.service';
import {GenericService} from '../gneric.service';
import {AlertService} from '../alert.service';


@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
})
export class UserAccountComponent implements OnInit {

  userInfo: Object;

  constructor(private userService: SignupService, private genService: GenericService, private router: Router, private alertService: AlertService) {
  }

  getUsers() {
    this.userService.getUserProfile().subscribe(
        res => {
          this.userInfo = JSON.parse(JSON.parse(JSON.stringify(res))._body)[0];
          console.log(this.userInfo);
          console.log(JSON.stringify(res));
        },
        error => {console.log(error)
          this.onError(error);
        }
    )
  }

  onError(message: string) {
    this.alertService.error(message);
  }

  ngOnInit() {
    this.getUsers();
  }

}
