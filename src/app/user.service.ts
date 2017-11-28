import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import { environment } from 'environments/environment.prod';

const balURL = environment.ballerinaUrl;

@Injectable()
export class UserService {

  constructor (private http:Http){}

  getAccountList(){
    let url = balURL + "/account/getinfo";
    return this.http.get(url, { withCredentials: true });
  }

  getAccountHistory(){
    let url = balURL + "/accounthistory" + "?acc=" +localStorage.getItem('accForHistory');
    return this.http.get(url, {withCredentials: true});
  }

  getUsers() {
    let url = "http://localhost:9090/api/getuser";
    return this.http.get(url, { withCredentials: true });
  }

  getPrimaryTransactionList(username: string) {
    let url = "http://localhost:8080/api/user/primary/transaction?username="+username;
    return this.http.get(url, { withCredentials: true });
  }

  getSavingsTransactionList(username: string) {
    let url = "http://localhost:8080/api/user/savings/transaction?username="+username;
    return this.http.get(url, { withCredentials: true });
  }

  enableUser (username: string) {
    let url = "http://localhost:8080/api/user/"+username+"/enable";
    return this.http.get(url, { withCredentials: true });
  }

  disableUser (username: string) {
    let url = "http://localhost:8080/api/user/"+username+"/disable";
    return this.http.get(url, { withCredentials: true });
  }

}
