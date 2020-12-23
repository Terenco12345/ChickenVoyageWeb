import { Component, Input, OnInit } from '@angular/core';

/**
 * This component is a basic loading circle.
 * There are two states to the loading bar:
 * - Loading
 * - Loaded
 */
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  @Input()
  size: number = 20;

  constructor() { }

  ngOnInit(): void {
  }

}
