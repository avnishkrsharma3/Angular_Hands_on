import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pagedata } from './user/pagedata';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='https://reqres.in/api/users?page=2';
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<pagedata> {
    return this.http.get<pagedata>(this.url);
  }
}
