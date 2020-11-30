import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  logoSize: number;

  constructor() { }

  ngOnInit(): void {
    this.updateLogoSize()
  }

  onResize(event: Event){
    this.updateLogoSize()
  }

  updateLogoSize(){
    this.logoSize = 256;
    if (window.outerWidth < 400){
      this.logoSize = 64;
    } else if(window.outerWidth < 768){
      this.logoSize = 128;
    } 
  }
}
