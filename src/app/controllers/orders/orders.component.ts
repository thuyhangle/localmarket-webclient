import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { contentHeaders } from '../../components/common/headers';
import { url } from '../../components/common/headers';
import 'rxjs/Rx';
import {Observable} from "RxJS/Rx";

import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {
  data = [];
  constructor(private ordersService: OrdersService, private http: Http) { }

  ngOnInit() {
  }

  //GET all orders
  getOrders() {
  	this.ordersService.getOrders()
      .subscribe(
        data => {
          this.data = data;
        }
      );
  }
  //GET order by Id
  getOrderById(event, orderId) {
  	this.ordersService.getOrderById(orderId)
      .subscribe(
        data => {
          this.data = data;
        }
      );
  }
  //DELETE order by Id
  deleteOrderById(event, orderId) {
  	this.ordersService.deleteOrderById(orderId);
  }
  //GET order with userId
  getOrderByUserid(event, userId) {
  	this.ordersService.getOrderByUserId(userId)
      .subscribe(
        data => {
          this.data = data;
        }
      );
  }
  //DELETE order by userId
  deleteOrderByUserId(event, userId) {
  	this.ordersService.deleteOrderByUserId(userId);
  }
  //GET order by productId
  getOrderByProductId(event, productId) {
  	this.ordersService.getOrderByProductId(productId)
      .subscribe(
        data => {
          this.data = data;
        }
      );
  }
  //DELETE order by productId
  deleteOrderByProductId(event, productId) {
  	this.ordersService.deleteOrderByProductId(productId);
  }
}