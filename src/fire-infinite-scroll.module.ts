/**
 * Created by josesaez on 27/11/18.
 */
import { ModuleWithProviders, NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FireInfiniteScroll } from './components/fire-infinite-scroll.component';

@NgModule({
    declarations: [
        FireInfiniteScroll
    ],
    imports: [
        IonicPageModule.forChild(FireInfiniteScroll)
    ],
    exports: [
        FireInfiniteScroll
    ],
    entryComponents: [
        FireInfiniteScroll
    ],
    providers: [

    ]
})
export class FireInfiniteScrollModule
{
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: FireInfiniteScrollModule
        };
    }
}