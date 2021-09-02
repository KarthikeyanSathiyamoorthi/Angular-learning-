import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private URL: string = "https://reqres.in/api/users?page=2";
  constructor( private http: HttpClient) { }

  getEmployees(){
    return this.http.get<any>(this.URL);
    // return[
    //   { "id":1, "name":"Andrew", "age":"30"},
    //   { "id":2, "name":"Brandon", "age":"25"},
    //   { "id":3, "name":"Christian", "age":"26"},
    //   { "id":4, "name":"Elena", "age":"28"}
    // ];
  }
}
