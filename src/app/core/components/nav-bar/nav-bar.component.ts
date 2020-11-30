import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Theme, ThemeService } from '@core/services/theme/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    // Mobile menu
    trigger('mobileMenuOpenClosed', [
      state('open', style({
        height: '230px',
      })),
      state('closed', style({
        height: '0px',
      })),
      transition('* => *', animate('300ms ease-out')),
    ]),
  ],

})
export class NavBarComponent implements OnInit {

  @Input()
  mobileMenuActive: boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  /**
   * Toggle app's theme (light mode or dark mode.)
   */
  toggleTheme() {
    this.themeService.toggleLightAndDarkMode();
  }

  /**
   * Gets app's theme (light mode or dark mode.)
   */
  getCurrentMode(): Theme {
    return this.themeService.getCurrentThemeFromLocalStorage();
  }

  /**
   * Toggles the mobile menu.
   */
  toggleMobileMenu() {
    this.mobileMenuActive = !this.mobileMenuActive;
  }
}
