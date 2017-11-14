import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { environment } from 'environments/environment.prod';

const balURL = environment.ballerinaUrl;

@Injectable()
export class LoginService {

    constructor (private http: Http) {}

    sendCredential(username: string, password: string) {
        let url = balURL + "/login";
        let params = 'username='+username+'&password='+password;
        let headers = new Headers(
            {
                'Content-Type': 'application/x-www-form-urlencoded'
                // 'Access-Control-Allow-Credentials' : true
            });
        return this.http.post(url, params, {headers: headers, withCredentials : true});
    }

    logout() {
        let url = balURL + "/logout";
        return this.http.get(url, { withCredentials: true });
    }

}
