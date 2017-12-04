import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";
import { environment } from 'environments/environment.prod';

const balURL = environment.ballerinaUrl;

@Injectable()
export class GenericService {

  constructor(private http: Http) {
  }

  hadleError(msg : string) {
  }

}
