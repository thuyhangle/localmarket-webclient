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
var OrdersService = (function () {
    function OrdersService(http) {
        this.http = http;
    }
    //GET all orders
    OrdersService.prototype.getOrders = function () {
        return this.http.get(headers_1.url + 'orders')
            .map(function (res) { return res.json(); });
    };
    //GET order by Id
    OrdersService.prototype.getOrderById = function (orderId) {
        return this.http.get(headers_1.url + 'orders/' + orderId)
            .map(function (res) { return res.json(); });
    };
    //DELETE order by Id
    OrdersService.prototype.deleteOrderById = function (orderId) {
        this.http.delete(headers_1.url + 'orders/' + orderId);
    };
    //GET order with userId
    OrdersService.prototype.getOrderByUserId = function (userId) {
        return this.http.get(headers_1.url + 'orders/user/items')
            .map(function (res) { return res.json(); });
    };
    //DELETE order by userId
    OrdersService.prototype.deleteOrderByUserId = function (userId) {
        this.http.delete(headers_1.url + 'orders/user/items');
    };
    //GET order by productId
    OrdersService.prototype.getOrderByProductId = function (productId) {
        return this.http.get(headers_1.url + 'orders/product/' + productId)
            .map(function (res) { return res.json(); });
    };
    //DELETE order by productId
    OrdersService.prototype.deleteOrderByProductId = function (productId) {
        this.http.delete(headers_1.url + 'orders/product/' + productId);
    };
    return OrdersService;
}());
OrdersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map