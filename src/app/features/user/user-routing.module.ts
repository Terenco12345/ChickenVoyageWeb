import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AntiAuthGuardService, AuthGuardService } from '@core/services/auth/auth-guard.service';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilePageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AntiAuthGuardService]
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    canActivate: [AntiAuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
