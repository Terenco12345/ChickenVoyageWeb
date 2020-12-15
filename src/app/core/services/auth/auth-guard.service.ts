// src/app/auth/auth-guard.service.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * This class is for routes like /character, which shouldn't be accessed if a user isn't logged in.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(public authService: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (!this.authService.isAuthenticated()) {
      console.warn("User shouldn't access this, they aren't authenticated.");
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}

/**
 * This class is for routes like /login and /register, which shouldn't be accessed if a user is already logged in.
 */
@Injectable({
  providedIn: 'root'
})
export class AntiAuthGuardService implements CanActivate {
  constructor(public authService: AuthService, public router: Router) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      console.warn("User shouldn't access this, they are authenticated already.");
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}