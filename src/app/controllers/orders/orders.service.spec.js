"use strict";
var testing_1 = require("@angular/core/testing");
var orders_service_1 = require("./orders.service");
describe('OrdersService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [orders_service_1.OrdersService]
        });
    });
    it('should ...', testing_1.inject([orders_service_1.OrdersService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=orders.service.spec.js.map