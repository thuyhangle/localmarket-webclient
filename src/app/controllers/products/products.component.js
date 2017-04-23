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
var products_service_1 = require("./products.service");
var ProductsComponent = (function () {
    function ProductsComponent(productsService, http) {
        this.productsService = productsService;
        this.http = http;
        this.data = [];
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    //GET products
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productsService.getProducts()
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    //POST products
    ProductsComponent.prototype.postProducts = function (event, userId, typeId, name, desc, price, image) {
        event.preventDefault();
        console.log(userId, typeId, name, desc, price);
        this.productsService.postProducts(userId, typeId, name, desc, price, image);
    };
    //DELETE products
    ProductsComponent.prototype.deleteProducts = function () {
        this.productsService.deleteProducts();
    };
    //GET product by type
    ProductsComponent.prototype.getProductsByType = function (event, typeId) {
        var _this = this;
        event.preventDefault();
        this.productsService.getProductsByType(typeId)
            .subscribe(function (data) { return _this.data = data; });
    };
    //DELETE products by type
    ProductsComponent.prototype.deleteProductsByType = function (event, typeId) {
        event.preventDefault();
        this.productsService.deleteProductsByType(typeId);
    };
    //GET product by Id
    ProductsComponent.prototype.getProductById = function (event, productId) {
        var _this = this;
        event.preventDefault();
        console.log(productId);
        this.productsService.getProductById(productId)
            .subscribe(function (data) { return _this.data = data; });
    };
    //UPDATE product by Id
    ProductsComponent.prototype.editProductById = function (event, productId, typeId, name, desc, price) {
        event.preventDefault();
        this.productsService.editProductById(productId, typeId, name, desc, price);
    };
    //DELETE product by Id
    ProductsComponent.prototype.deleteProductById = function (event, productId) {
        event.preventDefault();
        this.productsService.deleteProductById(productId);
    };
    //GET products by User
    ProductsComponent.prototype.getProductsByUser = function () {
        this.productsService.getProductsByUser();
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'app-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.css'],
        providers: [products_service_1.ProductsService]
    }),
    __metadata("design:paramtypes", [products_service_1.ProductsService, http_1.Http])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map