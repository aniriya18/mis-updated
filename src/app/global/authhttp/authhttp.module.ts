import { NgModule } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { APP_CONFIG, AppConfig} from "./../global.module";

export function authHttpServiceFactory(http: Http, options: RequestOptions 
) {
  return new AuthHttp(new AuthConfig({
    headerName:'Authorization',
    headerPrefix:'',
    noJwtError:true,
    noTokenScheme:true,
		 tokenGetter: (() =>  {
       let item = JSON.parse(localStorage.getItem('h3u_nerve_usertoken'));
       return 'Bearer '+item.token;
      }),
		globalHeaders: [{'Content-Type':'application/json'}],
	}), http, options);
}

@NgModule({
  providers: [
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AuthhttpModule {}