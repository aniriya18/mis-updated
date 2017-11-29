import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
