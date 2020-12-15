import { Injectable } from '@angular/core';

export enum Theme{
  LIGHT = "theme-light", 
  DARK = "theme-dark"
}

/**
 * This service handles themes (collections of style variables).
 */
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { 
    // Check to see if a local storage setting exists
    if(!this.getCurrentThemeFromLocalStorage()){
      document.body.classList.add(Theme.LIGHT);
      localStorage.setItem("theme", Theme.LIGHT);
    }
  }

  /**
   * Toggle between light and dark mode.
   */
  public toggleLightAndDarkMode(){
    if(this.getCurrentThemeFromLocalStorage() == Theme.LIGHT){
      this.setTheme(Theme.DARK);
    } else {
      this.setTheme(Theme.LIGHT);
    }
  }

  /**
   * Update the light/dark theme of the document.
   */
  public updateTheme(): void{
    this.setTheme(this.getCurrentThemeFromLocalStorage())
  }

  /**
   * Set the theme within the document to be a new theme, and update local storage.
   * @param theme New theme
   */
  private setTheme(theme: Theme): void{
    console.log("Changing theme to "+theme);
    document.body.classList.remove(this.getCurrentThemeFromLocalStorage());
    document.body.classList.add(theme);

    localStorage.setItem("theme", theme);
  }

  /**
   * Obtain the theme setting from local storage.
   */
  public getCurrentThemeFromLocalStorage() : Theme{
    var themeString: string = localStorage.getItem("theme");
    switch(themeString){
      case Theme.LIGHT:
        return Theme.LIGHT;
      case Theme.DARK:
        return Theme.DARK;
      default:
        return null;
    }
  }
}
