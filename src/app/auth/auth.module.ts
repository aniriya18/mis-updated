import { NgModule } from '@angular/core';
import { authrouting } from "./auth-routing";
import { GlobalModule } from './../global/global.module';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './components/login/login.component';
//import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
//import { ChangepasswordComponent } from './components/changepassword/changepassword.component';


@NgModule({
  imports: [
    CommonModule,
    authrouting,
    GlobalModule
  ],
  declarations: [
    LoginComponent, 
    //ForgotpasswordComponent, 
    //ChangepasswordComponent
  ]
})
export class AuthModule { }
