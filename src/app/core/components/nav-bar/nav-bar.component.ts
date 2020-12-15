import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth/auth.service';
import { Theme, ThemeService } from '@core/services/theme/theme.service';
import { UserProfile, UserService } from '@user/services/user.service';

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

  mobileMenuActive: boolean = false;

  @Input()
  isLoggedIn = false;

  constructor(
    private themeService: ThemeService, 
    private userService: UserService, 
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.mobileMenuActive = false;
    this.userService.getCurrentUser().subscribe(
      res => {
        this.isLoggedIn = true;
      },
      _ => {
        this.authService.setToken("");
        this.isLoggedIn = false;
      }
    )
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

  /**
   * Closes the mobile menu.
   */
  closeMobileMenu(){
    this.mobileMenuActive = false;
  }

  logout(){
    this.authService.setToken("");
    this.isLoggedIn = false;
  }
}
