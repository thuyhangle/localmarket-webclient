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
var headers_1 = require("../../components/common/headers");
require("rxjs/Rx");
var users_service_1 = require("./users.service");
var UsersComponent = (function () {
    function UsersComponent(usersService, http) {
        this.usersService = usersService;
        this.http = http;
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    //Login
    UsersComponent.prototype.login = function () {
        var _this = this;
        var email = "test1@gmail.com";
        var password = "test1";
        var body = JSON.stringify({ email: email, password: password });
        console.log(body);
        this.http.post('http://localhost:4000/login', body, { headers: headers_1.contentHeaders })
            .subscribe(function (res) { return _this.res = res; });
    };
    //GET all user
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersService.getUsers()
            .subscribe(function (res) { return _this.res = res; });
    };
    //GET user profile
    UsersComponent.prototype.getUserProfile = function () {
        var _this = this;
        this.usersService.getUserProfile()
            .subscribe(function (res) { return _this.res = res; });
    };
    //GET user by Id
    UsersComponent.prototype.getUserById = function (userId) {
        var _this = this;
        this.usersService.getUserById(userId)
            .subscribe(function (res) { return _this.res = res; });
    };
    //DELETE user by Id
    UsersComponent.prototype.deleteUserById = function (userId) {
        this.usersService.getUserById(userId);
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    core_1.Component({
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.css'],
        providers: [users_service_1.UsersService]
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService, http_1.Http])
], UsersComponent);
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map