import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../../components/common/headers';
import { url } from '../../components/common/headers';
import 'rxjs/Rx';
import {Observable} from "RxJS/Rx";

import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  res: any;
  constructor(private usersService: UsersService, private http: Http, public router: Router) { }

  ngOnInit() {
  }

  //Login
  login(event, email, password) {
    this.usersService.logIn(email, password);
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/users']);
  }

  signup(event, email, password) {
    this.usersService.postUser(email, password);
  }
  
  //GET all user
  getUsers() {
    this.usersService.getUsers()
      .subscribe(
        res => this.res = res
      );
  }

  //GET user profile
  //NOT implemented
  getUserProfile() {
    this.usersService.getUserProfile()
      .subscribe(
        res => this.res = res
      );
  }

  //GET user by Id
  getUserById(event, userId) {
    this.usersService.getUserById(userId)
      .subscribe(
        res => this.res = res
      );
  }

  //DELETE user by Id
  deleteUserById(event, userId) {
    this.usersService.deleteUserById(userId);
    console.log(userId);
  }
}
