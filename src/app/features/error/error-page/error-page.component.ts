import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  @Input()
  title: string = "Error";

  @Input()
  body: string = "An error has occurred.";

  constructor() { }

  ngOnInit(): void {
  }

}
