import { Component, OnInit } from '@angular/core';
import {SignupService} from '../signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

  loggedIn: boolean;
  username: string;
  password: string;

  constructor (private signupService: SignupService) {
    if(localStorage.getItem('SignupSessionValid') == '' || localStorage.getItem('SignupSessionValid') == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  onSubmit() {
    this.signupService.sendToken(this.username, this.password).subscribe(
      res => {
        this.loggedIn=true;
        localStorage.setItem('PortalAdminHasLoggedIn', 'true');
        location.reload();
      },
      err => console.log(err)
    );
  }

  getDisplay() {
    if(!this.loggedIn){
      return "none";
    } else {
      return "";
    }
  }

  ngOnInit() {}

}
