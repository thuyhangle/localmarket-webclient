"use strict";
var testing_1 = require("@angular/core/testing");
var types_service_1 = require("./types.service");
describe('TypesService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [types_service_1.TypesService]
        });
    });
    it('should ...', testing_1.inject([types_service_1.TypesService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=types.service.spec.js.map