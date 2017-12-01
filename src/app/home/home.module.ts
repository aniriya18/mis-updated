// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
// import { ChartsComponent } from './components/charts/charts.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';
import { HomeRouting } from './home-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { CorporatesComponent } from './components/corporates/corporates.component';


@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    HomeRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HomeDashboardComponent, ProductsComponent, 
    PaymentsComponent, CorporatesComponent]
})
export class HomeModule { }
