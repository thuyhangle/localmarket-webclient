import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { contentHeaders } from '../../components/common/headers';
import { url } from '../../components/common/headers';

@Injectable()
export class UsersService {
  res: any;
  constructor(private http: Http) { }

  //GET all user
  getUsers() {
  	return this.http.get(url+'users')
      .map((res: Response) => res.json());
  }
  //LOGIN
  logIn(email, password) {
    let body = JSON.stringify({email, password});
    console.log(body);
    this.http.post(url+'login', body, {headers : contentHeaders})
      .subscribe(
      res => {
          this.res = res.json();
          if (this.res.email) {
            let currentUser = this.res;
            localStorage.setItem('currentUser', JSON.stringify({currentUser}));
          }
          else console.log('error');
      }
    );
  }
  //POST new user
  postUser(email, password) {
    let body = JSON.stringify({email, password});
    this.http.post(url+'users/', body, {headers : contentHeaders})
      .subscribe(
        data => {
            console.log(data.json());           
        }
      );
  }

  //GET user profile
  getUserProfile() {
  	return this.http.get(url + 'users/profile')
  	  .map((res: Response) => res.json());
  }

  //GET user by Id
  getUserById(userId) {
  	return this.http.get(url + 'users/' + userId)
  	  .map((res: Response) => res.json());
  }

  //DELETE user by Id
  deleteUserById(userId) {
  	this.http.delete(url + 'users/' + userId)
      .subscribe(
        data => {
            console.log(data.json());           
        }
      );
  }
}
