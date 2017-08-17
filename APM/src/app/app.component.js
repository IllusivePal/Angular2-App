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
var AppComponent = (function () {
    function AppComponent(_http) {
        this._http = _http;
        this.pageTitle = "Acme Product Management";
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("THIS START");
        setInterval(function () {
            _this.show = _this._http.testVar;
            console.log(_this._http.testVar);
            setTimeout(function () {
                _this.show = false;
            }, 5000);
        }, 1000);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'pm-app',
        template: "<div>\n                    <nav class='navbar navbar-default'>\n                        <div class='container-fluid'>\n                            <a class='navbar-brand'>{{pageTitle}}</a>\n                            <ul class='nav navbar-nav'>\n                                <li><a [routerLink]=\"['/welcome']\">Home</a></li>\n                                <li><a [routerLink]=\"['/products']\">Product List</a></li>\n                            </ul>\n                        </div>\n                    </nav>\n              </div>\n              <div *ngIf=\"show\">LOADINGGGG</div>\n              \n              <div class='container'>\n                    <router-outlet></router-outlet>\n                   \n              </div>"
    }),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map