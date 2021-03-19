import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-box-error',
  templateUrl: './box-error.component.html',
  styles: [
  ]
})
export class BoxErrorComponent implements OnInit {

  @Input() errorMessage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
