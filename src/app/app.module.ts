import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { FormsModule } from '@angular/forms';
import { QuantitySelectorComponent } from './quantity-selector/quantity-selector.component';
import { EditTempTemplateDrivenComponent } from './edit-temp-template-driven/edit-temp-template-driven.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeInfoComponent } from './employee-list/employee-info/employee-info.component';
import { SearchContentPipe } from './search-content.pipe';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ViewEmpComponent,
    EditEmpComponent,
    QuantityIncrementComponent,
    QuantitySelectorComponent,
    EditTempTemplateDrivenComponent,
    EditEmpReactiveComponent,
    EmployeeListComponent,
    EmployeeInfoComponent,
    SearchContentPipe,
    LoginComponent,
    UserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
