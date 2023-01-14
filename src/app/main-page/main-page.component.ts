import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  radius = 2;

  updateRadius(newRad: number) {
    this.radius = newRad;
  }

  constructor() { }

  ngOnInit() {
  }

}