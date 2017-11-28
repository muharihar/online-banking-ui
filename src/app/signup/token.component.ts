import { Component, OnInit } from '@angular/core';
import {TokenService} from '../token.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './token.component.html',
})
export class TokenComponent implements OnInit {

  signupSession: boolean;
  otp: string;

  constructor (private tokenService: TokenService, private router : Router) {
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
      err => {console.log(err)
              this.errorHnadler(err.toString());
      }
    );
  }

  // Function ti handle Error
  errorHnadler(errMsg: string) {
    localStorage.setItem('err', errMsg);
    this.router.navigate(["./error"]);
  }

  ngOnInit() {}

}
