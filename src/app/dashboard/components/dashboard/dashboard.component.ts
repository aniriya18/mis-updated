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
  isOpened:boolean = true;
  isOpenSide:string = 'side';

  constructor(
    private loginService:LoginService,
    private router:Router
  ) { }

  ngOnInit() {
    if(window.innerWidth < 768) {
      this.isOpened = false;
      this.isOpenSide = 'over';
    }
  }

  logOut() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
