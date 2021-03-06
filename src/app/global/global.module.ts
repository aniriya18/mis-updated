import { NgModule, InjectionToken } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }  from '@angular/router';
//import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, 
  MatInputModule, MatFormFieldModule, MatCardModule,
   MatProgressBarModule, MatMenuModule, MatSidenavModule } from '@angular/material';
   

import {MatIconModule} from '@angular/material/icon'
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AuthhttpModule } from "./authhttp/authhttp.module";



import 'hammerjs';


export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  mis_token_key:string;
  api_base_url: string;
  login_url:string;
  product_url:string;
  payment_url:string;
}

let getHostName = window.location.hostname;
if(getHostName == "localhost") {
  //var _hostName = "http://192.168.9.50/";
  //var _hostName = "http://192.168.9.50/";
  var _hostName = "https://www.h3u.com/";
} else {
  var _hostName = "https://www.h3u.com/";
}

export const APP_DI_CONFIG: AppConfig = {
  mis_token_key: "h3u_mis_usertoken",
  api_base_url: _hostName+'v2/apis/app/',
  login_url: "auth/login",
  product_url: "opinion/FMO",
  payment_url: "opinion/SMO",
}


@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    RouterModule,
    ReactiveFormsModule,
   
    
    FlexLayoutModule,
    MatIconModule,
    ChartsModule,
    AuthhttpModule,
    
   [MatButtonModule,MatCheckboxModule,MatInputModule, 
    MatFormFieldModule,MatCardModule, MatProgressBarModule, 
    MatMenuModule, MatSidenavModule],
    NgxDatatableModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    ChartsModule,
    AuthhttpModule,
    
    MatFormFieldModule,
    FlexLayoutModule,
    MatCardModule, 
    MatMenuModule,
    MatSidenavModule,
    MatProgressBarModule,
    MatIconModule,
    NgxDatatableModule
  ],
  providers:[{ provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class GlobalModule { }
