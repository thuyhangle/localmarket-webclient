import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';

import { ProductsService } from '../products/products.service';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [ProductsService]
})
export class CartComponent implements OnInit {
  list = JSON.parse(localStorage.getItem('cart'));
  data = [];
  itemList = [];
  constructor(private productsService: ProductsService, private router: Router, private http: Http) { }

  ngOnInit() {
    if (!localStorage.getItem('currentUserId')) {
      this.router.navigate(['/users']);
    }
    else {
      for (let i = 0; i < this.list.length; i++) {
		this.productsService.getProductById(this.list[i])
	      .subscribe(
	        data => {
	        	this.data = data;
	        	this.itemList.push (data);
	        }
	      );
      }
    }
  }
  clearCart() {
  	this.itemList = [];
    localStorage.setItem('cart', []);
  }
}
