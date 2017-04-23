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
var orders_service_1 = require("./orders.service");
var OrdersComponent = (function () {
    function OrdersComponent(ordersService, http) {
        this.ordersService = ordersService;
        this.http = http;
        this.data = [];
    }
    OrdersComponent.prototype.ngOnInit = function () {
    };
    //GET all orders
    OrdersComponent.prototype.getOrders = function () {
        var _this = this;
        this.ordersService.getOrders()
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    //GET order by Id
    OrdersComponent.prototype.getOrderById = function (event, orderId) {
        var _this = this;
        this.ordersService.getOrderById(orderId)
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    //DELETE order by Id
    OrdersComponent.prototype.deleteOrderById = function (event, orderId) {
        this.ordersService.deleteOrderById(orderId);
    };
    //GET order with userId
    OrdersComponent.prototype.getOrderByUserid = function (event, userId) {
        var _this = this;
        this.ordersService.getOrderByUserId(userId)
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    //DELETE order by userId
    OrdersComponent.prototype.deleteOrderByUserId = function (event, userId) {
        this.ordersService.deleteOrderByUserId(userId);
    };
    //GET order by productId
    OrdersComponent.prototype.getOrderByProductId = function (event, productId) {
        var _this = this;
        this.ordersService.getOrderByProductId(productId)
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    //DELETE order by productId
    OrdersComponent.prototype.deleteOrderByProductId = function (event, productId) {
        this.ordersService.deleteOrderByProductId(productId);
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    core_1.Component({
        selector: 'app-orders',
        templateUrl: './orders.component.html',
        styleUrls: ['./orders.component.css'],
        providers: [orders_service_1.OrdersService]
    }),
    __metadata("design:paramtypes", [orders_service_1.OrdersService, http_1.Http])
], OrdersComponent);
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map