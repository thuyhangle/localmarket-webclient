"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
<<<<<<< HEAD
var PostsComponent = (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
=======
var http_1 = require("@angular/http");
var posts_service_1 = require("./posts.service");
var PostsComponent = (function () {
    function PostsComponent(postsService, http) {
        this.postsService = postsService;
        this.http = http;
        this.data = [];
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    //Post post with productid
    PostsComponent.prototype.createPostByProductid = function (event, productId, phone, address, other) {
        this.postsService.createPostByProductId(productId, phone, address, other);
    };
    //GET all posts with productId
    PostsComponent.prototype.getPostsByProductId = function (event, productId) {
        var _this = this;
        this.postsService.getPostsByProductId(productId)
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    //DELETE posts by product Id
    PostsComponent.prototype.deletePostsByProductId = function (event, productId) {
        this.postsService.deletePostsByProductId(productId);
    };
    //GET all posts
    PostsComponent.prototype.getPosts = function () {
        var _this = this;
        this.postsService.getPosts()
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    //DELETE all posts
    PostsComponent.prototype.deletePosts = function () {
        this.postsService.deletePosts();
    };
    //GET post by Id
    PostsComponent.prototype.getPostById = function (event, postId) {
        var _this = this;
        this.postsService.getPostById(postId)
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    //EDIT post by Id
    PostsComponent.prototype.editPostById = function (event, postId, phone, address, other) {
        this.postsService.editPostById(postId, phone, address, other);
    };
    //DELETE post by Id
    PostsComponent.prototype.deletePostById = function (event, postId) {
        this.postsService.deletePostById(postId);
    };
>>>>>>> 96536c15bb2ccc96a9ecf28b51807cac510403d0
    return PostsComponent;
}());
PostsComponent = __decorate([
    core_1.Component({
        selector: 'app-posts',
        templateUrl: './posts.component.html',
<<<<<<< HEAD
        styleUrls: ['./posts.component.css']
    }),
    __metadata("design:paramtypes", [])
=======
        styleUrls: ['./posts.component.css'],
        providers: [posts_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [posts_service_1.PostsService, http_1.Http])
>>>>>>> 96536c15bb2ccc96a9ecf28b51807cac510403d0
], PostsComponent);
exports.PostsComponent = PostsComponent;
//# sourceMappingURL=posts.component.js.map