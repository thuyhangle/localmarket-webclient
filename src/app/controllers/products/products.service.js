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
var ProductsService = (function () {
    function ProductsService(http) {
        this.http = http;
    }
    //GET products
    ProductsService.prototype.getProducts = function () {
        return this.http.get(headers_2.url + 'products')
            .map(function (res) { return res.json(); });
    };
    //POST products
    ProductsService.prototype.postProducts = function (userId, typeId, name, desc, price) {
        var body = JSON.stringify({ userId: userId, typeId: typeId, name: name, desc: desc, price: price });
        this.http.post(headers_2.url + 'products', body, { headers: headers_1.contentHeaders });
    };
    //DELETE products
    ProductsService.prototype.deleteProducts = function () {
        this.http.delete(headers_2.url + 'products');
    };
    //GET products by Type
    ProductsService.prototype.getProductsByType = function (typeId) {
        return this.http.get(headers_2.url + 'products/type/' + typeId)
            .map(function (res) { return res.json(); });
    };
    //DELETE products by type
    ProductsService.prototype.deleteProductsByType = function (typeId) {
        this.http.delete(headers_2.url + 'products/type/' + typeId);
    };
    //GET products by id
    ProductsService.prototype.getProductById = function (productId) {
        return this.http.get(headers_2.url + 'products/' + productId)
            .map(function (res) { return res.json(); });
    };
    //UPDATE product by Id
    ProductsService.prototype.editProductById = function (productId, typeId, name, desc, price) {
        var body = JSON.stringify({ typeId: typeId, name: name, desc: desc, price: price });
        this.http.put(headers_2.url + 'products/' + productId, body, { headers: headers_1.contentHeaders });
    };
    //DELETE product by Id
    ProductsService.prototype.deleteProductById = function (productId) {
        this.http.delete(headers_2.url + 'products/' + productId);
    };
    //GET products by User
    ProductsService.prototype.getProductsByUser = function () {
        return this.http.get(headers_2.url + 'products/user/items')
            .map(function (res) { return res.json(); });
    };
    return ProductsService;
}());
ProductsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map