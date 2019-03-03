import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-detail',
  template: `
  <h2>Employee Detail</h2>
  `,
  styles: [] 
})
export class EmployeeDetailComponent implements OnInit {

  public employees = [
    {"id": 1, "name": "Andrew", "age": 30},
    {"id": 2, "name": "Brandon", "age": 25},
    {"id": 3, "name": "Christins", "age": 26},
    {"id": 4, "name": "Elena", "age": 28}
  ];

  
    // <ul *ngFor="let employee of employees">
    //   <li>{{employee.1d}}. {{employee.name}} - {{employee.age}}</li>
    // </ul>

  constructor() { }

  ngOnInit() {
  }

}
