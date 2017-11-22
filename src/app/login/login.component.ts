import { Component, OnInit } from '@angular/core';
import {LoginService} from '../login.service';
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    loggedIn: boolean;
    username: string;
    password: string;

    constructor (private loginService: LoginService, private router : Router) {
        if(localStorage.getItem('PortalAdminHasLoggedIn') == null || localStorage.getItem('PortalAdminHasLoggedIn') == '' ) {
            this.loggedIn = false;
        } else {
            this.loggedIn = true;
        }
    }

    onSubmit() {
        this.loginService.sendCredential(this.username, this.password).subscribe(
            res => {
                this.loggedIn=true;
                localStorage.setItem('PortalAdminHasLoggedIn', 'true');
                location.reload();
            },
            err => console.log(err)
        );
    }

    redirectToToken(){
      this.router.navigate(["./token"]);
      console.log("Redirecting to Token");
    }

    // This will be triggered when the page init
    ngOnInit() {}

}
