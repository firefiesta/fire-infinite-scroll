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
        this.onInfinite = new core_1.EventEmitter();
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
                    self.onInfinite.emit(change.isIntersecting);
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
            if (core_1.isDevMode())
                console.log('IntersectionObserver is loaded');
        }
        else {
            // not supported
            this.isLoadedIntersectObserver = false;
            if (core_1.isDevMode()) {
                console.log('IntersectionObserver is not loaded');
                console.log('You must install IntersectionObserver polyfill');
                console.log('-----------------------------------------------');
                console.log('npm install intersection-observer --save');
                console.log('Adding the polyfill to your app in main.ts');
                console.log("import 'intersection-observer/intersection-observer';");
            }
        }
    };
    return FireInfiniteScroll;
}());
__decorate([
    core_1.Input()
], FireInfiniteScroll.prototype, "disabled", void 0);
__decorate([
    core_1.Input()
], FireInfiniteScroll.prototype, "iconName", void 0);
__decorate([
    core_1.Input()
], FireInfiniteScroll.prototype, "image", void 0);
__decorate([
    core_1.Input()
], FireInfiniteScroll.prototype, "text", void 0);
__decorate([
    core_1.Input()
], FireInfiniteScroll.prototype, "root", void 0);
__decorate([
    core_1.Input()
], FireInfiniteScroll.prototype, "rootMargin", void 0);
__decorate([
    core_1.Input()
], FireInfiniteScroll.prototype, "threshold", void 0);
__decorate([
    core_1.Output()
], FireInfiniteScroll.prototype, "onInfinite", void 0);
FireInfiniteScroll = __decorate([
    core_1.Component({
        selector: 'fire-infinite-scroll',
        templateUrl: 'fire-infinite-scroll.html'
    })
], FireInfiniteScroll);
exports.FireInfiniteScroll = FireInfiniteScroll;
