import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from './components/home-dashboard/home-dashboard.component';

const homeRoutes: Routes = [
    {path: '', component:HomeDashboardComponent,
        children:[
            {path:"", redirectTo:"home", pathMatch:"full"},
            //{path:"personal",component:PersonalinformationComponent},
            
        ]
    },
    {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
 
export const HomeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);

// export class HomeRouting {
// }
