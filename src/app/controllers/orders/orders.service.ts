import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { contentHeaders } from '../../components/common/headers';
import { url } from '../../components/common/headers';

@Injectable()
export class OrdersService {

  constructor(private http: Http) { }

  //GET all orders
  getOrders() {
  	return this.http.get(url+'orders')
      .map((res: Response) => res.json());
  }
  //GET order by Id
  getOrderById(orderId) {
    return this.http.get(url+'orders/'+orderId)
      .map((res: Response) => res.json());
  }
  //DELETE order by Id
  deleteOrderById(orderId) {
  	this.http.delete(url+'orders/'+orderId);
  }
  //GET order with userId
  getOrderByUserId(userId) {
  	return this.http.get(url+'orders/user/items')
      .map((res: Response) => res.json());
  }
  //DELETE order by userId
  deleteOrderByUserId(userId) {
  	this.http.delete(url+'orders/user/items');
  }
  //GET order by productId
  getOrderByProductId(productId) {
  	return this.http.get(url+'orders/product/'+productId)
      .map((res: Response) => res.json());
  }
  //DELETE order by productId
  deleteOrderByProductId(productId) {
  	this.http.delete(url+'orders/product/'+productId);
  }
}
