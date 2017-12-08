import { Component, OnInit } from '@angular/core';
import { LoginService } from "./../../../services/auth/login.service";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[LoginService]
})
export class HeaderComponent implements OnInit {
 

  constructor(
    private loginService:LoginService,
    private router:Router
  ) { }

  ngOnInit() {
    
  }

  logOut() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

}
