import { NgModule } from '@angular/core';
import { FireInfiniteScroll } from './components/fire-infinite-scroll.component';
import { IonicModule } from 'ionic-angular';
import { FireInfiniteScrollProvider } from './providers/fire-infinite-scroll.provider';
var FireInfiniteScrollModule = (function () {
    function FireInfiniteScrollModule() {
    }
    FireInfiniteScrollModule.forRoot = function () {
        return {
            ngModule: FireInfiniteScrollModule,
            providers: [FireInfiniteScrollProvider]
        };
    };
    FireInfiniteScrollModule.decorators = [
        { type: NgModule, args: [{
                    imports: [IonicModule],
                    declarations: [
                        FireInfiniteScroll
                    ],
                    exports: [
                        FireInfiniteScroll
                    ]
                },] },
    ];
    return FireInfiniteScrollModule;
}());
export { FireInfiniteScrollModule };
//# sourceMappingURL=fire-infinite-scroll.module.js.map