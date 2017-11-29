import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
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

  // Handles parorder adding request
  addPayorderItem(account: string, toacc: string, ammount: string, day: string, frequency: string){
    let url = balURL + "/payorder/add";
    let params = 'fromacc=' +account +"&toacc=" +toacc+ "&ammount=" +ammount+ "&freq=" +frequency+ "&day=" +day;
    let headers = new Headers(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Access-Control-Allow-Credentials' : true
      });
    return this.http.post(url, params, {headers: headers, withCredentials: true});
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
