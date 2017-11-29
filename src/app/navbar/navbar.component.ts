import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  loggedIn: boolean;
  errState: boolean;

  constructor(private loginService: LoginService, private router : Router) {
    if(localStorage.getItem('PortalAdminHasLoggedIn') == '' || localStorage.getItem('PortalAdminHasLoggedIn') == null) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  }

  logout(){
    this.loginService.logout().subscribe(
        res => {
          console.log("Response Recieved!!");
        },
        err => console.log(err)
    );
    localStorage.setItem("PortalAdminHasLoggedIn",'');
    //location.reload();
    this.router.navigate(["./login"]);
    location.reload();
    // this.router.navigate(["./login"]);
  }

  getDisplay() {
    console.log("User Login : " + this.loggedIn);
    if(!this.loggedIn){
      return "none";
    } else {
      return "";
    }
  }
  ngOnInit() {
  }

}
