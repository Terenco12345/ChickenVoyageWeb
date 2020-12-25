import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSheetDashboardPageComponent } from './character-sheet-dashboard-page/character-sheet-dashboard-page.component';
import { CharacterSheetRoutingModule } from './character-sheet-routing.module';
import { CharacterSheetPageComponent } from './character-sheet-page/character-sheet-page.component';


@NgModule({
  declarations: [CharacterSheetDashboardPageComponent, CharacterSheetPageComponent],
  imports: [
    CommonModule,
    CharacterSheetRoutingModule
  ]
})
export class CharacterSheetModule { }
