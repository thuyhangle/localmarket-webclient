import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { contentHeaders } from '../../components/common/headers';
import { url } from '../../components/common/headers';

@Injectable()
export class UsersService {
  res: any;
  constructor(private http: Http, private router: Router) { }

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
          if (this.res._id) {
            let currentUserId = res.json()._id;
            localStorage.setItem('currentUserId', currentUserId);
            this.router.navigate(['buyerPage/account']);
          }
          else console.log('error');
      }
    );
  }
  //POST new user
  postUser(email, password) {
    let body = JSON.stringify({email, password});
    this.http.post(url+'signup/', body, {headers : contentHeaders})
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
    console.log(userId);
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
