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
  userid: string;
  userList: Object;

  constructor (private signupService: SignupService) {
    if(localStorage.getItem('SignupSessionValid') == '' || localStorage.getItem('SignupSessionValid') == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
      this.getUserInfo();
    }
  }

  getUserInfo(){
    this.signupService.getUserInfo(this.userid).subscribe(
      res => {
        this.userList = JSON.parse(JSON.parse(JSON.stringify(res))._body);
        console.log(this.userList);
      },
      // Handle the errors properly
      err => console.log(err)
    );
  }

  onSubmit() {
    this.signupService.sendToken(this.username, this.password).subscribe(
      res => {
        this.loggedIn=true;
        localStorage.setItem('SignupSessionValid', 'true');
        location.reload();
      },
      err => console.log(err)
    );
  }

  sendSubmit() {
    this.signupService.sendSubmit(this.username, this.password).subscribe(
      res => {
        //this.loggedIn=true;
        // location.reload();
        console.log(res.statusText);
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
