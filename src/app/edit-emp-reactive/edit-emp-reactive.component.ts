import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../edit-temp-template-driven/Employee';
import { IDepartment } from '../employee/IDepartment';
import { IEmployee } from '../employee/IEmployee';
import { ISkill } from '../employee/ISkill';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css']
})
export class EditEmpReactiveComponent implements OnInit {

  employeeName:FormControl
  employee:IEmployee;
  empForm:FormGroup
  departments:{id:number, name:string}[];
  constructor(private route: ActivatedRoute){
    this.employee = me;
    this.employeeName = new FormControl(this.employee.name);
    this.departments = [
      { id: 1, name: "Payroll" },
      { id: 2, name: "Internal" },
      { id: 3, name: "HR" }
    ]
    this.empForm = new FormGroup({
      'name': new FormControl(this.employee.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ])
    });
    
  }

  ngOnInit(): void {
   const eId = this.route.snapshot.paramMap.get('id');
   console.log(eId);
  }
  get name() {
    return this.empForm.get('name');
  }

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
