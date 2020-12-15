import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { UserModule } from '@user/user.module';
import { HomeModule } from '@home/home.module';
import { NavBarComponent } from '@core/components/nav-bar/nav-bar.component.ts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from '@core/services/auth/auth-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AntiAuthGuardService, AuthGuardService } from '@core/services/auth/auth-guard.service';
import { AuthService } from '@core/services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    UserModule,
    HomeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
