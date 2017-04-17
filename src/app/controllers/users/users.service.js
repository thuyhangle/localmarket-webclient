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
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    //GET all user
    UsersService.prototype.getUsers = function () {
        return this.http.get(headers_1.url + 'users')
            .map(function (res) { return res.json(); });
    };
    //GET user profile
    UsersService.prototype.getUserProfile = function () {
        return this.http.get(headers_1.url + 'users/profile')
            .map(function (res) { return res.json(); });
    };
    //GET user by Id
    UsersService.prototype.getUserById = function (userId) {
        return this.http.get(headers_1.url + 'users/' + userId)
            .map(function (res) { return res.json(); });
    };
    //DELETE user by Id
    UsersService.prototype.deleteUserById = function (userId) {
        this.http.delete(headers_1.url + 'users/' + userId);
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map