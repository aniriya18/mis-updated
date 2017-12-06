import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import 'rxjs/add/operator/map';
import { APP_CONFIG, AppConfig } from './../../global/global.module';
//import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ProductsService {

  constructor(
    private _http: Http,
    //private authhttp: AuthHttp,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }


  getProductInfo(){
    return this._http.get(this.config.api_base_url+this.config.product_url)
    .map(data => {
        data.json();
        return data.json();
    });
  }

  // getProductInfo() {
  //  // console.log("consolelog", this.config.api_base_url+this.config.product_url);
  //   return this.authhttp.get(this.config.api_base_url+this.config.product_url)
  //     .map(data => {
  //         data.json();
  //         return data.json();
  //     });
  // }
}
