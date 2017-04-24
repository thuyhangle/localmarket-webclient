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
var TypesService = (function () {
    function TypesService(http) {
        this.http = http;
    }
    //POST a type
    TypesService.prototype.postType = function (name, desc) {
        var body = JSON.stringify({ name: name, desc: desc });
        this.http.post(headers_2.url + 'types/', body, { headers: headers_1.contentHeaders })
            .subscribe(function (data) {
            console.log(data.json());
        });
    };
    //GET types
    TypesService.prototype.getTypes = function () {
        return this.http.get(headers_2.url + 'types')
            .map(function (res) { return res.json(); });
    };
    //GET type with Id
    TypesService.prototype.getTypeById = function (typeId) {
        return this.http.get(headers_2.url + 'types/' + typeId)
            .map(function (res) { return res.json(); });
    };
    //PUT type by Id
    TypesService.prototype.editTypeById = function (typeId, name, desc) {
        var body = JSON.stringify({ name: name, desc: desc });
        this.http.put(headers_2.url + 'types/' + typeId, body, { headers: headers_1.contentHeaders })
            .subscribe(function (data) {
            console.log(data.json());
        });
    };
    //DELETE type by Id
    TypesService.prototype.deleteTypeById = function (typeId) {
        this.http.delete(headers_2.url + 'types/' + typeId)
            .subscribe(function (data) {
            console.log(data.json());
        });
    };
    return TypesService;
}());
TypesService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TypesService);
exports.TypesService = TypesService;
//# sourceMappingURL=types.service.js.map