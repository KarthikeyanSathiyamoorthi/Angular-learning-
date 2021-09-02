import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './todos/todos.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TodosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule    
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
