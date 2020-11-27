import { Component, OnInit } from '@angular/core';
import { Theme, ThemeService } from '../../services/theme/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }

  toggleTheme(){
    this.themeService.toggleLightAndDarkMode();
  }

  getCurrentMode() : Theme{
    return this.themeService.getCurrentThemeFromLocalStorage();
  }
}
