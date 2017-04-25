import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users/users.service';
import { Http, Response } from '@angular/http';

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [UsersService]
})
export class AccountComponent implements OnInit {
  currentUserId: any;
  data = [];
  constructor(private usersService: UsersService, private router: Router, private http: Http) { }

  ngOnInit() {
    if (!localStorage.getItem('currentUserId')) {
      this.router.navigate(['/users']);
    }
    else {
	  this.currentUserId = localStorage.getItem('currentUserId');
	  this.usersService.getUserById(this.currentUserId)
      .subscribe(
        data => {
          this.data = data;
        }
      );
    }
  }

  logout() {
    localStorage.removeItem('currentUserId');
    this.router.navigate(['/users']);
  }

}
