import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { GlobalModule } from "./global/global.module";
import { routing } from './app-routing/app-routing';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    routing,
    GlobalModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
