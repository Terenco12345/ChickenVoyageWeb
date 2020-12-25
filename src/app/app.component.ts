import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '@core/services/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ChickenVoyageWeb';

  constructor(private themeService: ThemeService, private router: Router) { 
    
  }

  ngOnInit(){
    this.themeService.updateTheme();
  }
}
