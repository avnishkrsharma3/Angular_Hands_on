import { Component, Input, Pipe, PipeTransform } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IDepartment } from '../employee/IDepartment';
import { IEmployee } from '../employee/IEmployee';
import { ISkill } from '../employee/ISkill';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  searchKey:string=''
  employee:IEmployee;
  department:IDepartment;
  employeeList:IEmployee[] ;
  skill:ISkill;
  skillArray = ['HTML', 'CSS', 'JavaScript'];
  id:number=1;
  constructor(private employeeService:EmployeeService){
    this.skill={skillArray : this.skillArray};
    this.department= { id: 1, name: 'Payroll' }; // department interface
    this.employee = { // employee interface
      id: 1,
      name: 'Avnish',
      salary: 150000,
      permanent: 'Yes',
      department: this.department,
      skill: this.skill,
      dob: new Date(),
    };
    this.employeeList = employeeService.getAllEmployees();   
    console.log(employeeService.getEmployee(this.id));
  }
}

// let department: IDepartment = { id: 1, name: 'Payroll' }; // department interface
// let array: string[] = ['HTML', 'CSS', 'JavaScript']; // array of skills
// let skillArray: ISkill = { skillArray: array }; // skill interface
// let me: IEmployee = { // employee interface
//   id: 1,
//   name: 'Avnish',
//   salary: 150000,
//   permanent: 'Yes',
//   department: department,
//   skill: skillArray,
//   dob: new Date(),
// };

// let me1: IEmployee = { // employee interface
//   id: 2,
//   name: 'Anit',
//   salary: 150000,
//   permanent: 'Yes',
//   department: department,
//   skill: skillArray,
//   dob: new Date(),
// };

// let me2: IEmployee = { // employee interface
//   id: 3,
//   name: 'Ritesh',
//   salary: 150000,
//   permanent: 'Yes',
//   department: department,
//   skill: skillArray,
//   dob: new Date(),
// };

// let me3: IEmployee = { // employee interface
//   id: 4,
//   name: 'Suraj',
//   salary: 150000,
//   permanent: 'Yes',
//   department: department,
//   skill: skillArray,
//   dob: new Date(),
// };


// let me4: IEmployee = { // employee interface
//   id: 5,
//   name: 'Abhishek',
//   salary: 150000,
//   permanent: 'Yes',
//   department: department,
//   skill: skillArray,
//   dob: new Date(),
// };

// let me5: IEmployee = { // employee interface
//   id: 6,
//   name: 'Ram',
//   salary: 150000,
//   permanent: 'Yes',
//   department: department,
//   skill: skillArray,
//   dob: new Date(),
// };

// let me6: IEmployee = { // employee interface
//   id: 7,
//   name: 'Mukul',
//   salary: 150000,
//   permanent: 'Yes',
//   department: department,
//   skill: skillArray,
//   dob: new Date(),
// };
