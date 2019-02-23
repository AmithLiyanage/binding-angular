import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `
    <h2>
      Welcome {{name }}
    </h2>
    <input [id]="myId" type="text" value="Vishwas">
    <input bind-disabled="isDisabled" type="text" value="Vishwas">
  `,
  styles: [] 
})
export class TestComponent implements OnInit {

  public name = "Codevoluation";
  public myId = "testId";
  public isDisabled = false;
  constructor() { }

  ngOnInit() { 
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
