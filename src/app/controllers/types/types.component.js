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
var types_service_1 = require("./types.service");
var TypesComponent = (function () {
    function TypesComponent(typesService, http) {
        this.typesService = typesService;
        this.http = http;
        this.data = [];
    }
    TypesComponent.prototype.ngOnInit = function () {
    };
    //POST a type
    TypesComponent.prototype.postType = function (event, name, desc) {
        this.typesService.postType(name, desc);
    };
    //GET types
    TypesComponent.prototype.getTypes = function () {
        var _this = this;
        this.typesService.getTypes()
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    //GET type with Id
    TypesComponent.prototype.getTypeById = function (event, typeId) {
        var _this = this;
        this.typesService.getTypeById(typeId)
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    //EDIT type by Id
    TypesComponent.prototype.editTypeById = function (event, typeId, name, desc) {
        this.typesService.editTypeById(typeId, name, desc);
    };
    //DELETE type by Id
    TypesComponent.prototype.deleteTypeById = function (event, typeId) {
        this.typesService.deleteTypeById(typeId);
    };
    return TypesComponent;
}());
TypesComponent = __decorate([
    core_1.Component({
        selector: 'app-types',
        templateUrl: './types.component.html',
        styleUrls: ['./types.component.css'],
        providers: [types_service_1.TypesService]
    }),
    __metadata("design:paramtypes", [types_service_1.TypesService, http_1.Http])
], TypesComponent);
exports.TypesComponent = TypesComponent;
//# sourceMappingURL=types.component.js.map