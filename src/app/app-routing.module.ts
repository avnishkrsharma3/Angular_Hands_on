import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { EditTempTemplateDrivenComponent } from './edit-temp-template-driven/edit-temp-template-driven.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'employee', component: ViewEmpComponent},
  {path: 'edit', component: EditEmpComponent },
  {path: 'quantityIncrement', component: QuantityIncrementComponent },
  {path: 'quantitySelector', component:QuantitySelectorComponent},
  {path: 'editTemplate', component:EditTempTemplateDrivenComponent},
  {path: 'edit-emp-reactive/:id', component: EditEmpReactiveComponent, canActivate :[AuthGuard]},
  {path: 'employeeList', component: EmployeeListComponent},
  {path: 'login', component:LoginComponent},
  {path: 'userData', component:UserComponent}
]


@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
