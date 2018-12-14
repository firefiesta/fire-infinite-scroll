var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { FireInfiniteScroll } from './components/fire-infinite-scroll.component';
import { IonicModule } from 'ionic-angular';
import { FireInfiniteScrollProvider } from './providers/fire-infinite-scroll.provider';
var FireInfiniteScrollModule = (function () {
    function FireInfiniteScrollModule() {
    }
    FireInfiniteScrollModule_1 = FireInfiniteScrollModule;
    FireInfiniteScrollModule.forRoot = function () {
        return {
            ngModule: FireInfiniteScrollModule_1,
            providers: [FireInfiniteScrollProvider]
        };
    };
    FireInfiniteScrollModule = FireInfiniteScrollModule_1 = __decorate([
        NgModule({
            imports: [IonicModule],
            declarations: [
                FireInfiniteScroll
            ],
            exports: [
                FireInfiniteScroll
            ]
        })
    ], FireInfiniteScrollModule);
    return FireInfiniteScrollModule;
    var FireInfiniteScrollModule_1;
}());
export { FireInfiniteScrollModule };
//# sourceMappingURL=fire-infinite-scroll.module.js.map