// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { ModuleWithProviders } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
// import { ChartsComponent } from './components/charts/charts.component';

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';
//import { ProductsComponent } from './components/products/products.component';

const homeRoutes: Routes = [
    {path: '', component:HomeDashboardComponent,
        children:[
            {path:"", redirectTo:"home", pathMatch:"full"},
            // {path:"product",component:ProductsComponent},
            // {path:"dummy",component:DummyComponent},
        ]
    },
   // {path: 'product', component:HomeDashboardComponent},
   {path: 'product' , loadChildren:"./../products/products.module#ProductsModule"},
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
 
export const HomeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);

// export class HomeRouting {
// }
