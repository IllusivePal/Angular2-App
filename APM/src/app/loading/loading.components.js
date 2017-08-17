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
var product_service_1 = require("../products/product.service");
var LoadingComponent = (function () {
    function LoadingComponent(_http) {
        this._http = _http;
        this.showLoading = new core_1.EventEmitter();
        console.log("Constructor for Loading Component");
    }
    LoadingComponent.prototype.onClick = function () {
        this.showLoading.emit(true);
        this._http.testVar = true;
    };
    return LoadingComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], LoadingComponent.prototype, "showLoading", void 0);
LoadingComponent = __decorate([
    core_1.Component({
        selector: 'loading-comp',
        moduleId: module.id,
        templateUrl: 'loading.component.html'
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], LoadingComponent);
exports.LoadingComponent = LoadingComponent;
//# sourceMappingURL=loading.components.js.map