import { NgModule, ModuleWithProviders } from '@angular/core';
import { FireInfiniteScroll } from './components/fire-infinite-scroll.component';
import { IonicModule } from 'ionic-angular';
import { FireInfiniteScrollProvider } from './providers/fire-infinite-scroll.provider';

@NgModule({
    imports: [IonicModule],
    declarations: [
        FireInfiniteScroll
    ],
    exports: [
        FireInfiniteScroll
    ]
})
export class FireInfiniteScrollModule
{
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FireInfiniteScrollModule,
            providers: [ FireInfiniteScrollProvider ]
        };
    }
}

