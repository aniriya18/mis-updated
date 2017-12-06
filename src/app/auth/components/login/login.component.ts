import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from "./../../../services/auth/login.service";
import { APP_CONFIG, AppConfig} from "./../../../global/global.module";
import { JwtHelper } from "angular2-jwt";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {
  // login: object = {};
  login: any = {
     mobileNumber:"9313567755"
    // email:"admin@h3u.com",
    // password:"admin"
  };
  constructor(
    private router: Router,
    private loginService: LoginService,
    @Inject(APP_CONFIG) private config: AppConfig 
  ) { }

  ngOnInit() {
  }

  sumbitFrm(credential) {
    console.log(credential);
    // this.loginService.login(credential.email,credential.password)
    //   .subscribe(loginReponse => {
    //     if(this.validateLoginResponse(loginReponse)){
    //       localStorage.setItem(this.config.nerve_token_key, JSON.stringify({ token: loginReponse.data.token }));
    //       this.router.navigate(['/dashboard']);
    //     }
    //   })
    this.loginService.login(credential.mobileNumber) 
      .subscribe(loginResponse => {
        console.log(loginResponse);
        if(this.validateLoginResponse(loginResponse)){
          localStorage.setItem(this.config.mis_token_key, JSON.stringify({token: loginResponse.data.token}));
          this.router.navigate(['/dashboard']);
        }
      })
  }

  private validateLoginResponse(loginResponse) :Boolean{
    if(loginResponse && loginResponse.data && loginResponse.data.token)
    return true;
    alert("sorry");
    return false;
  }
}
