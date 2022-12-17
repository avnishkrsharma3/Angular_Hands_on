import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  name: string;
  password: string;
  isLogin:boolean = false;
  constructor(private router : Router, private loginService: AuthService, private authService: AuthService) {
    this.name = '';
    this.password = '';
  }
  login(){
    this.authService.login(this.name, this.password);
    this.isLogin = this.authService.isLoggedIn()?false:true;
    if(this.isLogin === false)
    this.router.navigate(['/employeeList']);

  }
}
