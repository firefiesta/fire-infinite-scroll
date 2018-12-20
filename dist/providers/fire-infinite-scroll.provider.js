import { Injectable } from '@angular/core';
var FireInfiniteScrollProvider = (function () {
    function FireInfiniteScrollProvider() {
    }
    FireInfiniteScrollProvider.prototype.message = function () {
        console.log("I'm fire infinite scroll provider");
    };
    FireInfiniteScrollProvider.decorators = [
        { type: Injectable },
    ];
    return FireInfiniteScrollProvider;
}());
export { FireInfiniteScrollProvider };
//# sourceMappingURL=fire-infinite-scroll.provider.js.map