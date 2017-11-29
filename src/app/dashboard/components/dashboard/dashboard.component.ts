import { Component, OnInit } from '@angular/core';
import { LoginService } from "./../../../services/auth/login.service";
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers:[LoginService]
})
export class DashboardComponent implements OnInit {

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
