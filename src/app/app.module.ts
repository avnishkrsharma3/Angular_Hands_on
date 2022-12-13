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

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ViewEmpComponent,
    EditEmpComponent,
    QuantityIncrementComponent,
    QuantitySelectorComponent,
    EditTempTemplateDrivenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
