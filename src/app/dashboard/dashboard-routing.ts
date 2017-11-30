import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const dashboardRoutes: Routes = [
    {path: '', component:DashboardComponent , 
        children:[  
            {path: 'home' , loadChildren:"./../home/home.module#HomeModule"},
            {path: 'product' , loadChildren:"./../products/products.module#ProductsModule"},
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
 
export const dashboardrouting: ModuleWithProviders = RouterModule.forChild(dashboardRoutes);