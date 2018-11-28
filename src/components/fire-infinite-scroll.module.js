"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by josesaez on 27/11/18.
 */
var core_1 = require("@angular/core");
var ionic_angular_1 = require("ionic-angular");
var fire_infinite_scroll_component_1 = require("./fire-infinite-scroll.component");
var FireInfiniteScrollModule = FireInfiniteScrollModule_1 = (function () {
    function FireInfiniteScrollModule() {
    }
    FireInfiniteScrollModule.forRoot = function () {
        return {
            ngModule: FireInfiniteScrollModule_1
        };
    };
    return FireInfiniteScrollModule;
}());
FireInfiniteScrollModule = FireInfiniteScrollModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            fire_infinite_scroll_component_1.FireInfiniteScroll
        ],
        imports: [
            ionic_angular_1.IonicPageModule.forChild(fire_infinite_scroll_component_1.FireInfiniteScroll)
        ],
        exports: [
            fire_infinite_scroll_component_1.FireInfiniteScroll
        ],
        entryComponents: [
            fire_infinite_scroll_component_1.FireInfiniteScroll
        ],
        providers: []
    })
], FireInfiniteScrollModule);
exports.FireInfiniteScrollModule = FireInfiniteScrollModule;
var FireInfiniteScrollModule_1;
