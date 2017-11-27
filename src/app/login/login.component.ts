import {Component, OnInit} from "@angular/core";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

    loggedIn: boolean;
    username: string;
    password: string;
    error: boolean;

    constructor (private loginService: LoginService, private router : Router) {
      this.error = false;
      if(localStorage.getItem('PortalAdminHasLoggedIn') == null || localStorage.getItem('PortalAdminHasLoggedIn') == '' ) {
            this.loggedIn = false;
        } else {
            this.loggedIn = true;
        }
    }

    onSubmit() {
      console.log(this.error);
        this.loginService.sendCredential(this.username, this.password).subscribe(
          res => {
                this.loggedIn=true;
                localStorage.setItem('PortalAdminHasLoggedIn', 'true');
                location.reload();
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

    redirectToToken(){
      this.router.navigate(["./token"]);
    }

    // This will be triggered when the page init
    ngOnInit() {}

}
