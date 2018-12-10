import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { FireInfiniteScroll } from './components/fire-infinite-scroll.component';

@NgModule({
    declarations: [
        FireInfiniteScroll
    ],
    imports: [IonicModule],
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