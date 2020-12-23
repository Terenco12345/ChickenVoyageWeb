import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';
import { LogoMinimalComponent } from './components/logo-minimal/logo-minimal.component';
import { LoadingComponent } from './components/loading/loading.component';

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
