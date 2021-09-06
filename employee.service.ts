import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { IEmployee } from './employee';
// import 'rxjs/add/operator/catch';
import { catchError } from 'rxjs/operators';
// import 'rxjs/add/Observable/throw';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
 
  private URL: string = "https://reqres.in/api/users?page=2";
  constructor( private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.URL)
    .pipe(catchError(this.errorHandler));
    // return[
    //   { "id":1, "name":"Andrew", "age":"30"},
    //   { "id":2, "name":"Brandon", "age":"25"},
    //   { "id":3, "name":"Christian", "age":"26"},
    //   { "id":4, "name":"Elena", "age":"28"}
    // ];
  }
  errorHandler(error: HttpErrorResponse){
    return throwError (error.message || "server Error");
  }
}
