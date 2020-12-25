import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { LogoMinimalComponent } from './components/logo-minimal/logo-minimal.component';
import { LoadingComponent } from './components/loading/loading.component';

/**
 * The shared module contains components which are reused across the application.
 * Examples would be the logo, or the loading spinner, both of which are used in multiple places.
 */
@NgModule({
  declarations: [
    LogoComponent,
    LogoMinimalComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    LogoMinimalComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
