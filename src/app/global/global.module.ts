import { NgModule, InjectionToken } from '@angular/core';
//import { CommonModule } from '@angular/common';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }  from '@angular/router';
import { AuthhttpModule } from "./authhttp/authhttp.module";
import 'hammerjs';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  nerve_token_key:string;
  api_base_url: string;
  login_url:string;
}

let getHostName = window.location.hostname;
if(getHostName == "localhost") {
  //var _hostName = "http://192.168.9.50/";
  var _hostName = "http://192.168.9.50/";
} else {
  var _hostName = "https://www.h3u.com/";
}

export const APP_DI_CONFIG: AppConfig = {
  nerve_token_key: "h3u_nerve_usertoken",
  api_base_url: _hostName+'v2/apis/nerve/',
  login_url: "auth/login",
}


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    // BrowserAnimationsModule,
   // NoopAnimationsModule,
   [MatButtonModule,MatCheckboxModule,MatInputModule, MatFormFieldModule],
        
  ],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    // BrowserAnimationsModule,
    //NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers:[{ provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class GlobalModule { }
