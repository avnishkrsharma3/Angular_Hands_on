import { IDepartment } from "../employee/IDepartment";
// import { IEmployee } from "./IEmployeeNew";
import { ISkill } from "../employee/ISkill";



export class Employee {
    id: number;
    name: string;
    salary: number;
    permanent: boolean;
    department: { id: number, name: string };
    skills: { id: number, name: string }[];
    doj: Date;
    constructor() {
        this.name = 'Avnish';
        this.id = 1;
        this.salary = 10000;
        this.permanent = true;
        this.department =
            { id: 1, name: "Payroll" };
        this.skills = [
            { id: 1, name: "HTML" },
            { id: 2, name: "CSS" },
            { id: 3, name: "JavaScript" },
        ]
        this.doj = new Date();
    }
   
}

