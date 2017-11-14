import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { environment } from 'environments/environment.prod';

const balURL = environment.ballerinaUrl;

@Injectable()
export class TokenService {

  constructor (private http: Http) {}

  sendOTP(token : string) {
    let url = balURL + "/token";
    let params = 'token='+token;
    let headers = new Headers(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Access-Control-Allow-Credentials' : true
      });
    return this.http.post(url, params, {headers: headers, withCredentials : true});
  }
}
