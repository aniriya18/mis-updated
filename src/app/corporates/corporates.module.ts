import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalModule } from './../global/global.module';
import { CorporateRouting } from './../corporates/corporate-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CorporatesComponent } from './components/corporates/corporates.component';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    CorporateRouting,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CorporatesComponent],
  exports: [
    CorporatesComponent
  ]
})
export class CorporatesModule { }

