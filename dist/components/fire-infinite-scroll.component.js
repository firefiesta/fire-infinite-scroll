var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component, ElementRef, EventEmitter, Input, Output, Inject, forwardRef, isDevMode } from '@angular/core';
var FireInfiniteScroll = (function () {
    /**
     *
     * @param element
     */
    function FireInfiniteScroll(element) {
        this.element = element;
        this.isLoadedIntersectObserver = false;
        this.disabled = true;
        this.iconName = 'crescent';
        this.text = null;
        this.root = null;
        this.rootMargin = '0px';
        this.threshold = 1.0;
        this.onInfinite = new EventEmitter();
    }
    FireInfiniteScroll.prototype.ngOnInit = function () {
        this.checkisLoadedIntersectObserver();
    };
    /**
     *
     */
    FireInfiniteScroll.prototype.ngAfterViewInit = function () {
        var self = this;
        if (this.isLoadedIntersectObserver) {
            var options = {
                root: this.root,
                rootMargin: this.rootMargin,
                threshold: this.threshold // visible amount of item shown in relation to root
            };
            var observer = new IntersectionObserver(function (changes, observer) {
                changes.forEach(function (change) {
                    var isIntersecting = false;
                    if (change.intersectionRatio > 0) {
                        isIntersecting = true;
                    }
                    self.onInfinite.emit(isIntersecting);
                });
            }, options);
            observer.observe(self.element.nativeElement);
        }
    };
    /**
     *
     */
    FireInfiniteScroll.prototype.checkisLoadedIntersectObserver = function () {
        if ('IntersectionObserver' in window) {
            // supported
            this.isLoadedIntersectObserver = true;
            if (isDevMode())
                console.log('IntersectionObserver is loaded');
        }
        else {
            // not supported
            this.isLoadedIntersectObserver = false;
            if (isDevMode()) {
                console.log('IntersectionObserver is not loaded');
                console.log('You must install IntersectionObserver polyfill');
                console.log('-----------------------------------------------');
                console.log('npm install intersection-observer --save');
                console.log('Adding the polyfill to your app in main.ts');
                console.log("import 'intersection-observer/intersection-observer';");
            }
        }
    };
    __decorate([
        Input()
    ], FireInfiniteScroll.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], FireInfiniteScroll.prototype, "iconName", void 0);
    __decorate([
        Input()
    ], FireInfiniteScroll.prototype, "image", void 0);
    __decorate([
        Input()
    ], FireInfiniteScroll.prototype, "text", void 0);
    __decorate([
        Input()
    ], FireInfiniteScroll.prototype, "root", void 0);
    __decorate([
        Input()
    ], FireInfiniteScroll.prototype, "rootMargin", void 0);
    __decorate([
        Input()
    ], FireInfiniteScroll.prototype, "threshold", void 0);
    __decorate([
        Output()
    ], FireInfiniteScroll.prototype, "onInfinite", void 0);
    FireInfiniteScroll = __decorate([
        Component({
            selector: 'fire-infinite-scroll',
            template: "<ion-grid *ngIf=\"!disabled\">\n        <ion-row>\n            <ion-col col-12 text-center>\n                <ion-spinner *ngIf=\"!image\" [name]=\"iconName\"></ion-spinner>\n                <img *ngIf=\"image\" [class]=\"image?.class\"  [src]=\"image?.url\" [alt]=\"image?.alt\">\n                <p *ngIf=\"text\">{{text}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>"
        }),
        __param(0, Inject(forwardRef(function () { return ElementRef; })))
    ], FireInfiniteScroll);
    return FireInfiniteScroll;
}());
export { FireInfiniteScroll };
//# sourceMappingURL=fire-infinite-scroll.component.js.map