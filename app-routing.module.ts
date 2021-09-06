import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListsComponent } from './department-lists/department-lists.component';
import { CustomerListsComponent } from './customer-lists/customer-lists.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';


const routes: Routes = [

  // { path: '', redirectTo: '/registration', pathMatch:'full' },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  // { path: "departments", component: DepartmentListsComponent },
  // { path: "customers", component: CustomerListsComponent },
  // { path: "departments/:id", component: DepartmentDetailComponent },
  // { path: "**", component: PageNotFoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponenets = [ RegistrationComponent, 
                                    LoginComponent, 
                                    PageNotFoundComponent,  
                                  ]
                                    // PageNotFoundComponent, 
                                    // DepartmentDetailComponent ]