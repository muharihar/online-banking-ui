import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { environment } from 'environments/environment.prod';

const balURL = environment.ballerinaUrl;


@Injectable()
export class UtilityService {

  constructor (private http:Http){}

  getAccountList(){
    let url = balURL + "/account/getinfo";
    return this.http.get(url, { withCredentials: true });
  }

  // Handles utility bill payment adding request
  payUtilityBill(account: string, provider: string, billno: string, amount: string){
    let url = balURL + "/payutilitybill";
    let params = 'fromacc=' +account +"&provider=" +provider+ "&billno=" +billno + "&amount=" +amount;
    let headers = new Headers(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Access-Control-Allow-Credentials' : true
      });
    return this.http.post(url, params, {headers: headers, withCredentials: true});
  }

}
