"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var tab_1 = require("./components/tab/tab");
var test_component_1 = require("./controllers/test.component");
var app_routes_1 = require("./app.routes");
var orders_component_1 = require("./controllers/orders/orders.component");
var types_component_1 = require("./controllers/types/types.component");
var posts_component_1 = require("./controllers/posts/posts.component");
<<<<<<< HEAD
=======
var products_component_1 = require("./controllers/products/products.component");
var users_component_1 = require("./controllers/users/users.component");
>>>>>>> 96536c15bb2ccc96a9ecf28b51807cac510403d0
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            http_1.HttpModule, platform_browser_1.BrowserModule, forms_1.FormsModule,
            router_1.RouterModule.forRoot(app_routes_1.routes),
        ],
        declarations: [
            app_component_1.AppComponent,
            tab_1.TabComponent,
            test_component_1.TestComponent,
            products_component_1.ProductsComponent,
            users_component_1.UsersComponent,
            orders_component_1.OrdersComponent,
            types_component_1.TypesComponent,
            posts_component_1.PostsComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map