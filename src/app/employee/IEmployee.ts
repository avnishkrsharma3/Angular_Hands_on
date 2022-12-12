import { IDepartment } from "./IDepartment";
import { ISkill } from "./ISkill";


export interface IEmployee {
    id:number;
    name:string;
    salary:number;
    permanent:string;
    department:IDepartment;
    skill:ISkill,
    dob:Date   
}