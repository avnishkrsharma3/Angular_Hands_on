import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TitleStrategy } from '@angular/router';
import { IEmployee } from '../employee/IEmployee';
import { Employee } from './Employee';

@Component({
  selector: 'app-edit-temp-template-driven',
  templateUrl: './edit-temp-template-driven.component.html',
  styleUrls: ['./edit-temp-template-driven.component.css']
})
export class EditTempTemplateDrivenComponent {
  onSubmit(f : NgForm){
    console.log(f.value);
    console.log("SUBMITED");
}
@ViewChild('ngForm')
  ngForm:EditTempTemplateDrivenComponent | undefined;
  name:string;
  id:number;
  salary:number;
  permanent:boolean;
  departments:{id:number, name:string}[];
  skills:{id:number, name:string}[];
  doj:Date;
  employee:Employee;
  selectedDep:number;
  constructor(){
    this.name='Avnish';
    this.id=1;
    this.salary=10000;
    this.permanent=false;
    this.departments = [
      { id: 1, name: "Payroll" },
      { id: 2, name: "Internal" },
      { id: 3, name: "HR" }
    ]
    this.skills = [
      { id: 1, name: "HTML"},
      { id: 2, name: "CSS"},
      { id: 3, name: "JavaScript"},
    ]
    this.selectedDep = 1;
    this.doj = new Date();
    this.employee = new Employee(this.name, this.salary, this.permanent);
  }
 

}
