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
var loading_service_1 = require("../shared/loading.service");
var WelcomeComponent = (function () {
    function WelcomeComponent(_loadServ) {
        this._loadServ = _loadServ;
        this.pageTitle = 'Welcome';
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._propertySubscription = this._loadServ.loadingProperty$.subscribe(function (p) {
            _this.loadingStat = p;
        });
    };
    WelcomeComponent.prototype.ngOnDestroy = function () {
        this._propertySubscription.unsubscribe();
    };
    WelcomeComponent.prototype.showLoading = function () {
        var _this = this;
        this._loadServ.loadingProperty = true;
        //console.log("STATUS",this.property)
        setTimeout(function () {
            // if(this.loadingStat)
            // {
            _this._loadServ.loadingProperty = false;
            // }
        }, 2000);
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: 'home-app',
        moduleId: module.id,
        templateUrl: 'welcome.component.html'
    }),
    __metadata("design:paramtypes", [loading_service_1.LoadingService])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map