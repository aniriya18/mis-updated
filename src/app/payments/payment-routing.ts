import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaymentsComponent } from './components/payments/payments.component';

const paymentRoutes: Routes = [
    {path: '', component:PaymentsComponent,
        children:[
            {path:"", redirectTo:"payment", pathMatch:"full"},
           // {path:"product",component:ProductInfoComponent},
            // {path:"dummy",component:DummyComponent},
        ]
    },
    {path: '**', redirectTo: 'payment', pathMatch: 'full'},
];
 
export const PaymentRouting: ModuleWithProviders = RouterModule.forChild(paymentRoutes);

