import { Component } from '@angular/core';
import { ThemeService } from '@core/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ChickenVoyageWeb';

  constructor(private themeService: ThemeService) { 
    themeService.updateTheme();
  }
}
