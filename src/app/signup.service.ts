import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {environment} from "../environments/environment";

const balURL = environment.ballerinaUrl;

@Injectable()
export class SignupService {

  constructor (private http: Http) {}

  sendToken(username: string, password: string) {
    let url = balURL + "/token";
    let params = 'token='+username;
    let headers = new Headers(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Access-Control-Allow-Credentials' : true
      });
    return this.http.post(url, params, {headers: headers, withCredentials : true});
  }

  getUserInfo(clientid: string) {
    let url = balURL + "/getuser";
    let params = 'userid='+ clientid;
    let headers = new Headers(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Access-Control-Allow-Credentials' : true
      });
    return this.http.post(url, params, {headers: headers, withCredentials : true});
  }

  sendSubmit(username: string, password: string) {
    let url = balURL + "/signup";
    let params = 'username='+username +'&password='+password;
    let headers = new Headers(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Access-Control-Allow-Credentials' : true
      });
    return this.http.post(url, params, {headers: headers, withCredentials : true});
  }
}
