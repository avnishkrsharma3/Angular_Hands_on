import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { user } from './User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

    u:user[]=[];
    constructor(private userService :UserService){

    }

    ngOnInit():void {
      this.userService.getAllUsers().subscribe(d => this.u=d.data);
    }


}
