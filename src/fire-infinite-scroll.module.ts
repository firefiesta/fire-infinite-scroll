import { NgModule, ModuleWithProviders } from '@angular/core';
import { FireInfiniteScroll } from './components/fire-infinite-scroll.component';

@NgModule({
    declarations: [
        FireInfiniteScroll
    ],
    exports: [
        FireInfiniteScroll
    ]
})
export class FireInfiniteScrollModule
{
    static forRoot() : ModuleWithProviders {
        return {
            ngModule: FireInfiniteScrollModule,
            providers: []
        };
    }
}