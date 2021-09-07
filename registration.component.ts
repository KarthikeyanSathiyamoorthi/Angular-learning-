import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public firstName = "";
  public lastName = "";
  public userName = "";
  public email = "";
  public role = "";
  public password = "";
  private URL: string = "https://reqres.in/api/users?page=2";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
   
  }
  onSubmit(){
    console.log("firstName", this.firstName);
    console.log("lastName", this.lastName);
    console.log("userName", this.userName);
    console.log("email", this.email);
    console.log("email", this.role);
    console.log("password", this.password);
   
    const details =
    {
      firstName: this.firstName,
      lastName: this.lastName,
      userName:this.userName,
      email:this.email,
      role:this.role,
      password:this.password
    } 
    console.log("details", details);
  
    this.http.post(this.URL , details).subscribe((res: any) => {
      console.log("res", res);
  })
}
}
