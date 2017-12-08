import { Injectable, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './../../global/global.module';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class ProductsService {

 // abc: boolean = true;
  constructor(
    private _http: Http,
    private authhttp: AuthHttp,
    @Inject(APP_CONFIG) private config: AppConfig
  ) { }


  getProductInfo(){

    //console.log("myurl", this.config.api_base_url+this.config.product_url);
    return this.authhttp.get(this.config.api_base_url+this.config.product_url)
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
