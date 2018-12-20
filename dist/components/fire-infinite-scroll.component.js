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
    /**
         *
         */
    FireInfiniteScroll.prototype.ngAfterViewInit = /**
         *
         */
    function () {
        var self = this;
        if (this.isLoadedIntersectObserver) {
            var options = {
                root: this.root,
                // relative to document viewport
                rootMargin: this.rootMargin,
                // margin around root. Values are similar to css property. Unitless values not allowed
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
    /**
         *
         */
    FireInfiniteScroll.prototype.checkisLoadedIntersectObserver = /**
         *
         */
    function () {
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
    FireInfiniteScroll.decorators = [
        { type: Component, args: [{
                    selector: 'fire-infinite-scroll',
                    template: "<ion-grid *ngIf=\"!disabled\">\n        <ion-row>\n            <ion-col col-12 text-center>\n                <ion-spinner *ngIf=\"!image\" [name]=\"iconName\"></ion-spinner>\n                <img *ngIf=\"image\" [class]=\"image?.class\"  [src]=\"image?.url\" [alt]=\"image?.alt\">\n                <p *ngIf=\"text\">{{text}}</p>\n            </ion-col>\n        </ion-row>\n    </ion-grid>"
                },] },
    ];
    /** @nocollapse */
    FireInfiniteScroll.ctorParameters = function () { return [
        { type: ElementRef, decorators: [{ type: Inject, args: [forwardRef(function () { return ElementRef; }),] },] },
    ]; };
    FireInfiniteScroll.propDecorators = {
        "disabled": [{ type: Input },],
        "iconName": [{ type: Input },],
        "image": [{ type: Input },],
        "text": [{ type: Input },],
        "root": [{ type: Input },],
        "rootMargin": [{ type: Input },],
        "threshold": [{ type: Input },],
        "onInfinite": [{ type: Output },],
    };
    return FireInfiniteScroll;
}());
export { FireInfiniteScroll };
//# sourceMappingURL=fire-infinite-scroll.component.js.map