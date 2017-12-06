import {Injectable} from "@angular/core";
import {Headers, Http} from "@angular/http";

@Injectable()
export class GenericService {

  constructor(private http: Http) {
  }

  hadleError(msg : string) {
  }

}
