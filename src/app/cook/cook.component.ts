import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.css']
})
export class CookComponent implements OnInit {

  constructor() { }

  ingredients1 : string;
  ingredients2 : string;
  clicked = false;

  Cook() {
    this.clicked = true
  }

  CleanAll() {
    this.clicked = false
    this.ingredients1 = null;
    this.ingredients2 = null;

}

  ngOnInit() {
  }

}

