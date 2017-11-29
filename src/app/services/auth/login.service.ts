import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { APP_CONFIG, AppConfig } from './../../global/global.module';

@Injectable()
export class LoginService {

  constructor(
    private _http: Http,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }

  login(username,password){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.config.api_base_url + this.config.login_url
    ,'{"username":"'+username+'","password":"'+password+'"}'
    ,options
    )
    .map(res=>res.json());
  }

  logout(){
    localStorage.removeItem(this.config.nerve_token_key);
  }

}
