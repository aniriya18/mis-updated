import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
//import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
//import { ChangepasswordComponent } from './components/changepassword/changepassword.component';

const authRoutes: Routes = [
    {path:"login", component:LoginComponent},
    //{path:"forgotpassword", component:ForgotpasswordComponent},
    //{path:"changepassword/:token",component:ChangepasswordComponent},
    {path: '**', redirectTo: 'login', pathMatch: 'full'},
];
 
export const authrouting: ModuleWithProviders = RouterModule.forChild(authRoutes);