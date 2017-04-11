import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../../components/common/headers';

@Component({
  selector: 'buyer',
  templateUrl: './buyer.html'
})
export class Buyer {
  username: string;
  password: string;
  constructor(public router: Router, public http: Http) {
  }

  signup (name, password) {
    let body = JSON.stringify ({name, password});
    console.log(body);
    this.http.post('http://localhost:3000/api/buyers', body, { headers: contentHeaders })
      .subscribe(
        response => {
          localStorage.setItem('id_token', response.json().id_token);
          console.log('success');
          //this.router.navigate(['home']);
        }
      );
	}
}
