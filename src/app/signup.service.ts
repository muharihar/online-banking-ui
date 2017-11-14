import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class SignupService {

  constructor (private http: Http) {}

  sendToken(username: string, password: string) {
    let url = "http://localhost:9090/token";
    let params = 'token='+username;
    let headers = new Headers(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Access-Control-Allow-Credentials' : true
      });
    return this.http.post(url, params, {headers: headers, withCredentials : true});
  }

}
