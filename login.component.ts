import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName = "";
  public password = "";
  private URL: string = "https://reqres.in/api/users?page=2";


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
logIn(){
 
    console.log("userName", this.userName);
    console.log("password", this.password);
   
    const details =
    {
      userName:this.userName,
      password:this.password
    } 
    console.log("details", details);
  
    this.http.post(this.URL , details).subscribe((res: any) => {
      console.log("res", res);
  })
}
}

