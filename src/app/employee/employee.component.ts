import { Component, OnInit } from '@angular/core';
import { IDepartment } from './IDepartment';
import { IEmployee } from './IEmployee';
import { ISkill } from './ISkill';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  ngOnInit(): void {
    let msg1 = 'Hello';
  }
  constructor() {}
  e_test:IEmployee=me; // adding in EmployeeComponenent so that interpolation works AND WE CAN USE IT IN HTML TEMPLATE
}
let department: IDepartment = { id: 1, name: 'Payroll' }; // department interface
let array: string[] = ['HTML', 'CSS', 'JavaScript']; // array of skills
let skillArray: ISkill = { skillArray: array }; // skill interface
let me: IEmployee = { // employee interface
  id: 1,
  name: 'Avnish',
  salary: 150000,
  permanent: 'Yes',
  department: department,
  skill: skillArray,
  dob: new Date(),
};

// class employee_test { 
//   e: IEmployee;
//   constructor(e: IEmployee) {
//     this.e = e;
//   }
//}
