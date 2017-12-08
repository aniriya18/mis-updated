import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CorporatesComponent } from './components/corporates/corporates.component';

const corporateRoutes: Routes = [
    {path: '', component:CorporatesComponent,
        children:[
            {path:"", redirectTo:"corporate", pathMatch:"full"},
           // {path:"product",component:ProductInfoComponent},
            // {path:"dummy",component:DummyComponent},
        ]
    },
    {path: '**', redirectTo: 'corporate', pathMatch: 'full'},
];
 
export const CorporateRouting: ModuleWithProviders = RouterModule.forChild(corporateRoutes);

// export class CorporateRouting {
// }
