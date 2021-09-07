import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  topicHasError = true;
  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log("Form Submitted");
  }
  
  validateTopic(value){
    if(value === "default"){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }

  }
}
