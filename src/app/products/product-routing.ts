import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './components/product/product.component';

const productRoutes: Routes = [
    {path: '', component:ProductComponent,
        children:[
            {path:"", redirectTo:"product", pathMatch:"full"},
           // {path:"product",component:ProductInfoComponent},
            // {path:"dummy",component:DummyComponent},
        ]
    },
    {path: '**', redirectTo: 'product', pathMatch: 'full'},
];
 
export const ProductRouting: ModuleWithProviders = RouterModule.forChild(productRoutes);
