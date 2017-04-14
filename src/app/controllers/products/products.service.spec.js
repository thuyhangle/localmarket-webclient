"use strict";
var testing_1 = require("@angular/core/testing");
var products_service_1 = require("./products.service");
describe('ProductsService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [products_service_1.ProductsService]
        });
    });
    it('should ...', testing_1.inject([products_service_1.ProductsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=products.service.spec.js.map