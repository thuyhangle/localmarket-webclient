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
  constructor(private usersService: UsersService, private http: Http) { }

  ngOnInit() {
  }

  //Login
  login() {
    let email = "test1@gmail.com";
    let password = "test1";
  	let body = JSON.stringify({email,password});
    console.log(body);
  	this.http.post('http://localhost:4000/login', body, {headers: contentHeaders})
    .subscribe(
      res => this.res = res
      );
  }

  //GET all user
  getUsers() {
  	this.usersService.getUsers()
  	  .subscribe(
        res => this.res = res
      );
  }

  //GET user profile
  getUserProfile() {
  	this.usersService.getUserProfile()
  	  .subscribe(
        res => this.res = res
      );
  }

  //GET user by Id
  getUserById(userId) {
  	this.usersService.getUserById(userId)
  	  .subscribe(
        res => this.res = res
      );
  }

  //DELETE user by Id
  deleteUserById(userId) {
  	this.usersService.getUserById(userId);
  }

}
