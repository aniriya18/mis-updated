import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from "./../global/global.module";
import { dashboardrouting } from './dashboard-routing';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    dashboardrouting,
    CommonModule,
    GlobalModule
  ],
  declarations: [DashboardComponent, HeaderComponent, SidebarComponent],
  bootstrap:[DashboardComponent]
})
export class DashboardModule { }
