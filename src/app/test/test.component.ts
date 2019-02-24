import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  template: `
    <h2>
      Welcome {{name }}
    </h2>

    <h2 [style.color]="'orange'">Style Binding</h2>
  `,
  styles: [` 
    
  `] 
})
export class TestComponent implements OnInit {

  public name = "Codevoluation";
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": !this.hasError,
    "text-special": this.isSpecial
  }

  constructor() { }

  ngOnInit() { 
  }

  greetUser(){
    return "Hello " + this.name;
  }

}
