import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  // template:`
  // <h1 class = text-success >
  // Welcome {{name}}
  // </h1>
  // <h1  [class] = "successClass" >
  // Welcome {{name}}
  // </h1>
  // <h1 class = text-special [class] = "successClass" >
  // Welcome {{name}}
  // </h1>

  // <h1  [class.text-danger] = "hasError" >
  // Welcome {{name}}
  // </h1>
  // <input type = "text" value="John">
  // <input [disabled]="isDisplayed" [id]="myId" type = "text" value="karthik">

  // <h2 [style.color] = " hasError ? 'coral' : 'green' ">Hello</h2>
  // <h2 [style.color] = highlightColor >Style Binding</h2>
  // <h2 [ngStyle] = titleStyles >Style Binding 1</h2>

  // `,
  // styleUrls: ['./test.component.css']
  styles:[`
  .text-success{
    color:green
  }
  .text-danger{
    color:red
  }
  .text-special{
    font-style:italic;
  }
  `]
})
export class TestComponent implements OnInit {

  public name = "karthikeyan Sathiyamoorthi";
  public URL = window.location.href;
  public myId = "testId";
  public isDisplayed = false;
  public successClass = "text-success";
  public hasError = true;
  public highlightColor = "yellow";
  public titleStyles = {

    color:'red',
    fontStyle:'italic'

  }
  public clickedValue="";
  public userName = "";
  public displayName = true;
  public colorName = 'green';
  public colors = ["red", "blue", "green", "yellow"];

  @Input('parentData') public x : any;
  @Output () public childEvent = new EventEmitter();

  public pipeName = "Karthikeyan";
  public message = "welcome to angular";
  public person = {
    "firstName": "John",
    "lastName": "Doe"

  }

  public employees: any = [];
 
  constructor( private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployees().subscribe(res => {
      this.employees = res.data;
      // this.employees = res.data
      console.log("this.employees", this.employees);
      console.log("res", res.data);
    })
  }

  greetUser(){
    return "Haii " + this.name;
  }

  click(event : any){
    this.clickedValue = event.type;
    console.log(event);
  }

  logMessage(value : any){
    this.clickedValue = value;
    console.log(value);

  }
  fireEvent(){
    this.childEvent.emit("Hey Karthikeyen, How are you");
  }
}
