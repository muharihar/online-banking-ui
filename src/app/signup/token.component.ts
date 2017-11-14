import { Component, OnInit } from '@angular/core';
import {TokenService} from '../token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './token.component.html',
})
export class TokenComponent implements OnInit {

  signupSession: boolean;
  otp: string;

  constructor (private tokenService: TokenService) {
    // if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
    //   this.loggedIn = false;
    // } else {
    //   this.loggedIn = true;
    // }
  }

  onSubmit() {
    console.log("YYYYYYY");
    this.tokenService.sendOTP(this.otp).subscribe(
      res => {
        this.signupSession=true;
        localStorage.setItem('SignupSessionValid', 'true');
        location.assign("./signup");
      },
      err => console.log(err)
    );
  }

  ngOnInit() {}

}
