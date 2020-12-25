import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorRoutingModule } from './error-routing.module';

/**
 * This module handles everything to do with displaying errors to the user.
 */
@NgModule({
  declarations: [ErrorPageComponent],
  imports: [
    CommonModule,
    ErrorRoutingModule
  ]
})
export class ErrorModule { }
