import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserModule } from '@user/user.module';
import { HomeModule } from '@home/home.module';
import { NavBarComponent } from '@core/components/nav-bar/nav-bar.component.ts';
import { LogoComponent } from '@core/components/logo/logo.component.ts';
import { LogoMinimalComponent } from '@core/components/logo-minimal/logo-minimal.component.ts';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LogoComponent,
    LogoMinimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
