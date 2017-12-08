import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const dashboardRoutes: Routes = [
    {path: '', component:DashboardComponent , 
        children:[  
            {path: 'home' , loadChildren:"./../home/home.module#HomeModule"},
            {path: 'product' , loadChildren:"./../products/products.module#ProductsModule"},
            {path: 'payment' , loadChildren:"./../payments/payments.module#PaymentsModule"},
            {path: 'corporate' , loadChildren:"./../corporates/corporates.module#CorporatesModule"},
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
 
export const dashboardrouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);