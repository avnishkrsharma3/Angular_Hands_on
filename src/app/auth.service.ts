import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean = false;
  constructor(private router:Router) { }

  login(name:string, password:string){
    console.log("login");
    if(name === 'admin' && password === '123'){
      this.loggedIn = true;
      this.router.navigate(['edit-emp-reactive/:id']);
    }else{
      this.loggedIn = false;
      this.router.navigate(['/login']);
    }
    console.log(this.loggedIn);
  }
  logout(){

  }
  isLoggedIn():boolean{
    return this.loggedIn;
  }

}
