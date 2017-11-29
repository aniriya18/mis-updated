import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isOpened:boolean = true;
  isOpenSide:string = 'side';
  constructor() { }

  ngOnInit() {
    if(window.innerWidth < 768) {
      this.isOpened = false;
      this.isOpenSide = 'over';
    }
  }

}
