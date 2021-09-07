import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponenets } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './todos/todos.component';
import { DepartmentListsComponent } from './department-lists/department-lists.component';
import { CustomerListsComponent } from './customer-lists/customer-lists.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormComponent } from './form/form.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TodosComponent,
    routingComponenets,
    FormComponent,
    DepartmentOverviewComponent,
    DepartmentContactComponent,
    ReactiveFormsComponent,
    // RegistrationComponent,
    // LoginComponent,
    // DepartmentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule    
    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
