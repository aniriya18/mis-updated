import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';
import { PaymentRouting } from './../payments/payment-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaymentsComponent } from './components/payments/payments.component';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    PaymentRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [PaymentsComponent],
  exports: [
    PaymentsComponent
  ]
})
export class PaymentsModule { }
