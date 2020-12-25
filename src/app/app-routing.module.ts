import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: ()=> import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user',
    loadChildren: ()=> import('./features/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'character-sheet',
    loadChildren: ()=> import('./features/character-sheet/character-sheet.module').then(m => m.CharacterSheetModule)
  },
  {
    path: 'error',
    loadChildren: ()=> import('./features/error/error.module').then(m => m.ErrorModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
