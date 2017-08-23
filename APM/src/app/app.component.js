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
var product_service_1 = require("./products/product.service");
var loading_service_1 = require("./shared/loading.service");
var AppComponent = (function () {
    function AppComponent(_http, _loadService) {
        this._http = _http;
        this._loadService = _loadService;
        this.pageTitle = "Acme Product Management";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("THIS START");
        this._loadService.loadingProperty = false;
        this._propertySubscription = this._loadService.loadingProperty$.subscribe(function (p) {
            _this.show = p;
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._propertySubscription.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "<div>\n                    <nav class='navbar navbar-default'>\n                        <div class='container-fluid'>\n                            <a class='navbar-brand'>{{pageTitle}}</a>\n                            <ul class='nav navbar-nav'>\n                                <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                                <li><a [routerLink]=\"['/products']\">Product List</a></li>\n                            </ul>\n                        </div>\n                    </nav>\n              </div>\n              <loading-app [showProgress]=\"show\"></loading-app>\n              {{ property }}\n              \n              <div class='container'>\n                    <router-outlet></router-outlet>\n              </div>"
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService, loading_service_1.LoadingService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map