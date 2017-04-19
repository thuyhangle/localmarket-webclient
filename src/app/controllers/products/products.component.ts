import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { contentHeaders } from '../../components/common/headers';
import { url } from '../../components/common/headers';

import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})
export class ProductsComponent implements OnInit {
  data = [];
  image : any;
  constructor(private productsService: ProductsService, private http: Http) { }

  ngOnInit() {
  }

  //GET products
  getProducts() {
    this.productsService.getProducts()
      .subscribe(
        data => {
          this.data = data;
        }
      );
  }

  //POST products
  postProducts(event, userId, typeId, name, desc, price, image) {
    event.preventDefault();
    console.log(userId, typeId, name, desc, price);
    this.productsService.postProducts(userId, typeId, name, desc, price, image);
  }

  //DELETE products
  deleteProducts() {
    this.productsService.deleteProducts();
  }

  //GET product by type
  getProductsByType(event, typeId) {
    event.preventDefault();
    console.log(typeId);
    this.productsService.getProductsByType(typeId)
      .subscribe(
        data => this.data = data
      );
  }

  //DELETE products by type
  deleteProductsByType(typeId) {
    this.productsService.deleteProductsByType(typeId);
  }

  //GET product by Id
  getProductById(event, productId) {
    event.preventDefault();
    console.log(productId);
    this.productsService.getProductById(productId)
      .subscribe(
        data => this.data = data
      );
  }

  //UPDATE product by Id
  editProductById(productId, typeId, name, desc, price) {
    this.productsService.editProductById(productId, typeId, name, desc, price);
  }

  //DELETE product by Id
  deleteProductById(productId) {
    this.productsService.deleteProductById(productId);
  }

  //GET products by User
  getProductsByUser() {
    this.productsService.getProductsByUser();
  }
}
