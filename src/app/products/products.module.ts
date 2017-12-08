import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';
import { ProductRouting } from './../products/product-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { ProductComponent } from './components/product/product.component';
import { MhcComponent } from './components/mhc/mhc.component';
import { HealthPackagesComponent } from './components/health-packages/health-packages.component';




@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    ProductRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProductComponent, MhcComponent, HealthPackagesComponent],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { }
