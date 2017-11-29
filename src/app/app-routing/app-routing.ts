import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './../guards/auth.guard';


const appRoutes: Routes = [
   {path: '', redirectTo: 'user', pathMatch: 'full'},
   {path: 'user', loadChildren: "./../auth/auth.module#AuthModule"},
   {path: 'dashboard',canActivate:[AuthGuard], loadChildren:"./../dashboard/dashboard.module#DashboardModule"},
   {path: 'login' , redirectTo:"user" , pathMatch:'full'},
   //{path: 'forgotpassword', redirectTo:"user/forgotpassword", pathMatch:'full'},
   //{path: 'changepassword', redirectTo:"user/changepassword", pathMatch:'full'}
]
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);