import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { LogoMinimalComponent } from './logo-minimal/logo-minimal.component';

@NgModule({
  declarations: [
    LogoComponent,
    LogoMinimalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LogoComponent,
    LogoMinimalComponent
  ]
})
export class SharedModule { }
