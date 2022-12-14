import { Component, Input } from '@angular/core';
import { IDepartment } from '../../employee/IDepartment';
import { IEmployee } from '../../employee/IEmployee';
import { ISkill } from '../../employee/ISkill';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent {
  @Input() cameFromParent:any='';
  employee:IEmployee;
  department:IDepartment;
  skill:ISkill;
  skillArray = ['HTML', 'CSS', 'JavaScript'];
  constructor(){
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
}
}
