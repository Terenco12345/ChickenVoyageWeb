import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '@core/services/auth/auth-guard.service';
import { CharacterSheetDashboardPageComponent } from './character-sheet-dashboard-page/character-sheet-dashboard-page.component';
import { CharacterSheetPageComponent } from './character-sheet-page/character-sheet-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CharacterSheetDashboardPageComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '',
    component: CharacterSheetPageComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterSheetRoutingModule { }
