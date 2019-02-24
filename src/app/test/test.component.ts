import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `
    <div *ngFor="let color of colors">
      <h2>{{color}}</h2>
    </div>
  `,
  styles: [] 
})
export class TestComponent implements OnInit {

  public colors = ["red", "green", "blue", "yellow"];

  constructor() { }

  ngOnInit() { 
  }


}
