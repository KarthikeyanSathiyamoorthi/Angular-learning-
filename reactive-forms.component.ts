import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  registrationForm = new FormGroup({

    userName: new FormControl('vishwas'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
    
    city: new FormControl(''),
    state: new FormControl(''),
    postalCode: new FormControl(''),

    })

  });
  constructor() { }

  ngOnInit(): void {
  }

  loadApiData(){
    // this.registrationForm.setValue({
    //   userName:'Bruce',
    //   password:'test',
    //   confirmPassword:'test',
    //   address: {
    //     city:'City',
    //     state:'State',
    //     postalCode:'123456'

    //   }
    // });
    this.registrationForm.patchValue({
      userName:'Bruce',
      password:'test',
      confirmPassword:'test',
      
    });
  }
}
