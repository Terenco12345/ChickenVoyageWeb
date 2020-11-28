import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-minimal',
  templateUrl: './logo-minimal.component.svg',
  styleUrls: ['./logo-minimal.component.scss']
})
export class LogoMinimalComponent implements OnInit {

  outlineColor = "#000000";
  chickenColor1 = "#fbf236";
  chickenColor1Shadow = "#d4cc21";
  chickenColor2 = "#df7126";

  constructor() { }

  ngOnInit(): void {
  }

}
