import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.svg',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {

  @Input()
  size: number = 64;

  constructor() { }

  ngOnInit(): void {
  }
}
