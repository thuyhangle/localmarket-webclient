import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { contentHeaders } from '../../components/common/headers';
import { url } from '../../components/common/headers';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  //GET all user
  getUsers() {
  	return this.http.get(url+'users')
      .map((res: Response) => res.json());
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
