import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from "./../global/global.module";
import { dashboardrouting } from './dashboard-routing';

import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [
    dashboardrouting,
    CommonModule,
    GlobalModule
  ],
  declarations: [DashboardComponent],
  bootstrap:[DashboardComponent]
})
export class DashboardModule { }
