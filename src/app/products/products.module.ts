import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';
import { ProductRouting } from './../products/product-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    ProductRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ProductComponent],
  exports: [
    ProductComponent
  ]
})
export class ProductsModule { }
