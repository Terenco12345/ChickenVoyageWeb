import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetDashboardPageComponent } from './character-sheet-dashboard-page.component';

describe('CharacterSheetDashboardPageComponent', () => {
  let component: CharacterSheetDashboardPageComponent;
  let fixture: ComponentFixture<CharacterSheetDashboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterSheetDashboardPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
