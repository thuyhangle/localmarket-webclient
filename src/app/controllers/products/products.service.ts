import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { contentHeaders } from '../../components/common/headers';
import { url } from '../../components/common/headers';

@Injectable()
export class ProductsService {
  mydata:any;
  constructor(private http: Http) { }

  //GET products
  getProducts() {
  	return this.http.get(url+'products')
      .map((res: Response) => res.json());
  }

  //POST products
  postProducts(userId, typeId, name, desc, price, image) {
  	let body = JSON.stringify({userId, typeId, name, desc, price, image});
    this.http.post(url+'products', body, {headers: contentHeaders})
      .subscribe(
        data => {
            console.log(data.json());           
        }
      );
  }

  //DELETE products
  deleteProducts() {
    this.http.delete(url+'products')
      .subscribe(
        data => {
            console.log(data.json());           
        }
      );
  }

  //GET products by Type
  getProductsByType(typeId) {
    return this.http.get(url+'products/type/'+typeId)
      .map((res: Response) => res.json());
  }

  //DELETE products by type
  deleteProductsByType(typeId) {
    this.http.delete(url+'products/type/'+typeId)
      .subscribe(
        data => {
            console.log(data.json());           
        }
      );
  }

  //GET products by id
  getProductById(productId) {
    return this.http.get(url+'products/'+productId)
      .map((res: Response) => res.json());
  }

  //UPDATE product by Id
  editProductById(productId, typeId, name, desc, price) {
    let body = JSON.stringify({typeId, name, desc, price});
    this.http.put(url+'products/'+productId, body, {headers: contentHeaders})
      .subscribe(
        data => {
            console.log(data.json());           
        }
      );
  }

  //DELETE product by Id
  deleteProductById(productId) {
    this.http.delete(url+'products/'+productId)
      .subscribe(
        data => {
            console.log(data.json());           
        }
      );
  }

  //GET products by User
  getProductsByUser() {
    return this.http.get(url+'products/user/items')
      .map((res: Response) => res.json());
  }
}
