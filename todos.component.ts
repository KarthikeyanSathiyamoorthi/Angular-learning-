import { Component, OnInit } from '@angular/core';
import { Todo } from './../models/Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // todos?:Todo[];
  todos = [];
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {

  //   this.todos = [
  //     {
  //       content:'First todo',
  //       completed:true
  //     },
  //     {
  //       content:'Second todo',
  //       completed:false
  //     }
  //   ]
  // console.log("todos", this.todos);

  }
  
 toggleDone (id:number){
  console.log("id", id);
  
   this.todos.map((v, i) => {
     console.log("v", v);
     console.log("i", i);

     if(i == id ) v.completed =! v.completed;
     return v;
   })
 }
 deleteTodo (id:number) {
   this.todos = this.todos.filter ((v,i) => i !== id)
 }

 addTodo () {
   this.todos.push({
     content: this.inputTodo,
     completed:false
   })
   this.inputTodo = "";
}
}
