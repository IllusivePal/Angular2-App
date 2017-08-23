"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var loading_component_1 = require("./loading.component");
var loading_service_1 = require("./loading.service");
var LoadingModule = (function () {
    function LoadingModule() {
    }
    return LoadingModule;
}());
LoadingModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule],
        declarations: [loading_component_1.LoadingComponent],
        providers: [loading_service_1.LoadingService],
        exports: [loading_component_1.LoadingComponent]
    })
], LoadingModule);
exports.LoadingModule = LoadingModule;
//# sourceMappingURL=loading-shared.module.js.map