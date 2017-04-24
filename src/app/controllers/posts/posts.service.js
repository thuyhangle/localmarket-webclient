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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var headers_1 = require("../../components/common/headers");
var headers_2 = require("../../components/common/headers");
var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
    }
    //POST a post with productId
    PostsService.prototype.createPostByProductId = function (productId, phone, address, other) {
        var body = JSON.stringify({ phone: phone, address: address, other: other });
        this.http.post(headers_2.url + 'posts/product/' + productId, body, { headers: headers_1.contentHeaders })
            .subscribe(function (data) {
            console.log(data.json());
        });
    };
    //GET all posts with productId
    PostsService.prototype.getPostsByProductId = function (productId) {
        return this.http.get(headers_2.url + 'posts/products/' + productId)
            .map(function (res) { return res.json(); });
    };
    //DELETE all posts with productId
    PostsService.prototype.deletePostsByProductId = function (productId) {
        this.http.delete(headers_2.url + 'posts/products/' + productId)
            .subscribe(function (data) {
            console.log(data.json());
        });
    };
    //GET all posts
    PostsService.prototype.getPosts = function () {
        return this.http.get(headers_2.url + 'posts')
            .map(function (res) { return res.json(); });
    };
    //DELETE all posts
    PostsService.prototype.deletePosts = function () {
        this.http.delete(headers_2.url + 'posts')
            .subscribe(function (data) {
            console.log(data.json());
        });
    };
    //GET post by Id
    PostsService.prototype.getPostById = function (postId) {
        return this.http.get(headers_2.url + 'posts/' + postId)
            .map(function (res) { return res.json(); });
    };
    //EDIT post by Id
    PostsService.prototype.editPostById = function (postId, phone, address, other) {
        var body = JSON.stringify({ phone: phone, address: address, other: other });
        this.http.post(headers_2.url + 'posts/' + postId, body, { headers: headers_1.contentHeaders })
            .subscribe(function (data) {
            console.log(data.json());
        });
    };
    //DELETE post by Id
    PostsService.prototype.deletePostById = function (postId) {
        this.http.delete(headers_2.url + 'posts/' + postId)
            .subscribe(function (data) {
            console.log(data.json());
        });
    };
    return PostsService;
}());
PostsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map