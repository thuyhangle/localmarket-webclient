import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { contentHeaders } from '../../components/common/headers';
import { url } from '../../components/common/headers';

import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostsService]
})
export class PostsComponent implements OnInit {
  data = [];
  constructor(private postsService: PostsService, private http: Http) { }

  ngOnInit() {
  }

  //Post post with productid
  createPostByProductid(event, productId, phone, address, other) {
  	this.postsService.createPostByProductId(productId, phone, address, other);
  }
  //GET all posts with productId
  getPostsByProductId(event, productId) {
  	this.postsService.getPostsByProductId(productId)
  	  .subscribe(
        data => {
          this.data = data;
        }
      );
  }
  //DELETE posts by product Id
  deletePostsByProductId(event, productId) {
  	this.postsService.deletePostsByProductId(productId);
  }
  //GET all posts
  getPosts() {
  	this.postsService.getPosts()
  	  .subscribe(
        data => {
          this.data = data;
        }
      );
  }
  //DELETE all posts
  deletePosts() {
  	this.postsService.deletePosts();
  }
  //GET post by Id
  getPostById(event, postId) {
  	this.postsService.getPostById(postId)
  	  .subscribe(
        data => {
          this.data = data;
        }
      );
  }
  //EDIT post by Id
  editPostById(event, postId, phone, address, other) {
  	this.postsService.editPostById(postId, phone, address, other);
  }
  //DELETE post by Id
  deletePostById(event, postId) {
  	this.postsService.deletePostById(postId);
  }
}
