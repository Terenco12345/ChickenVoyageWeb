import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { SharedModule } from 'app/shared/shared.module';

/**
 * The user module contains pages and components which involve authenticating and manipulating users.
 * This includes:
 * - Login page
 * - Profile page
 * - Register page
 */
@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
