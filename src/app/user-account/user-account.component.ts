import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SignupService} from '../signup.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
})
export class UserAccountComponent implements OnInit {

  userInfo: Object;

  constructor(private userService: SignupService, private router: Router) {
  }

  getUsers() {
    this.userService.getUserProfile().subscribe(
        res => {
          this.userInfo = JSON.parse(JSON.parse(JSON.stringify(res))._body)[0];
          console.log(this.userInfo);
          console.log(JSON.stringify(res));
        },
        error => console.log(error)
    )
  }

  // onSelectPrimary(username: string) {
  //   this.router.navigate(['/primaryTransaction', username]);
  // }
  //
  // onSelectSavings(username: string) {
  //   this.router.navigate(['/savingsTransaction', username]);
  // }
  //
  // enableUser(username: string) {
  //   // this.userService.enableUser(username).subscribe();
  //   // location.reload();
  // }
  //
  // disableUser(username: string) {
  //   // this.userService.disableUser(username).subscribe();
  //   // location.reload();
  // }

  ngOnInit() {
    this.getUsers();
  }

}
