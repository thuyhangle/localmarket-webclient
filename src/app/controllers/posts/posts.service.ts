import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { contentHeaders } from '../../components/common/headers';
import { url } from '../../components/common/headers';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  //POST a post with productId
  createPostByProductId(productId, phone, address, other) {
  	let body = JSON.stringify({phone, address, other});
    this.http.post(url+'posts/product/'+productId, body, {headers: contentHeaders});
  }
  //GET all posts with productId
  getPostsByProductId(productId) {
  	return this.http.get(url+'posts/products/'+productId)
      .map((res: Response) => res.json());
  }
  //DELETE all posts with productId
  deletePostsByProductId(productId) {
  	this.http.delete(url+'posts/products/'+productId);
  }
  //GET all posts
  getPosts() {
  	return this.http.get(url+'posts')
      .map((res: Response) => res.json());
  }
  //DELETE all posts
  deletePosts() {
  	this.http.delete(url+'posts');  	
  }
  //GET post by Id
  getPostById(postId) {
  	return this.http.get(url+'posts/'+postId)
      .map((res: Response) => res.json());
  }
  //EDIT post by Id
  editPostById(postId, phone, address, other) {
  	let body = JSON.stringify({phone, address, other});
  	this.http.post(url+'posts/'+postId, body, {headers: contentHeaders});
  }
  //DELETE post by Id
  deletePostById(postId) {
  	this.http.delete(url+'posts/'+postId);
  }
}
