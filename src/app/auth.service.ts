import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean = false;
  constructor(private router:Router) { }

  login(name:string, password:string){
    console.log("Inside authService");
    if(name === 'Avnish' && password === '123'){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
      this.router.navigate(['/login']);
    }
    console.log("value of login is " + this.loggedIn);
  }
  logout(){

  }
  isLoggedIn():boolean{
    return this.loggedIn;
  }

}
