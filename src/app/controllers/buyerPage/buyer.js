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
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var headers_1 = require("../../components/common/headers");
var Buyer = (function () {
    function Buyer(router, http) {
        this.router = router;
        this.http = http;
    }
    Buyer.prototype.signup = function (name, password) {
        var body = JSON.stringify({ name: name, password: password });
        console.log(body);
        this.http.post('http://localhost:3000/api/buyers', body, { headers: headers_1.contentHeaders })
            .subscribe(function (response) {
            localStorage.setItem('id_token', response.json().id_token);
            console.log('success');
            //this.router.navigate(['home']);
        });
    };
    return Buyer;
}());
Buyer = __decorate([
    core_1.Component({
        selector: 'buyer',
        templateUrl: './buyer.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], Buyer);
exports.Buyer = Buyer;
//# sourceMappingURL=buyer.js.map