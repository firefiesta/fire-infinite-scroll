import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    AfterViewInit,
    OnInit,
    Inject,
    forwardRef,
    isDevMode
} from '@angular/core';

@Component({
    selector: 'fire-infinite-scroll',
    template: `<ion-grid *ngIf="!disabled">
        <ion-row>
            <ion-col col-12 text-center>
                <ion-spinner *ngIf="!image" [name]="iconName"></ion-spinner>
                <img *ngIf="image" [class]="image?.class"  [src]="image?.url" [alt]="image?.alt">
                <p *ngIf="text">{{text}}</p>
            </ion-col>
        </ion-row>
    </ion-grid>`
})
export class FireInfiniteScroll implements AfterViewInit, OnInit
{
    isLoadedIntersectObserver: boolean = false;
    @Input() disabled: boolean = true;
    @Input() iconName: string = 'crescent';
    @Input() image: {class_name: string, url: string, alt: string};
    @Input() text: any = null;
    @Input() root: any = null;
    @Input() rootMargin: any = '0px';
    @Input() threshold: any = 1.0;
    @Output() onInfinite = new EventEmitter();

    /**
     *
     * @param element
     */
    constructor(
        @Inject(forwardRef(() => ElementRef)) public element: ElementRef
    ){}

    ngOnInit()
    {
        this.checkisLoadedIntersectObserver();
    }

    /**
     *
     */
    ngAfterViewInit()
    {
        let self = this;

        if (this.isLoadedIntersectObserver) {
            let options = {
                root: this.root, // relative to document viewport
                rootMargin: this.rootMargin, // margin around root. Values are similar to css property. Unitless values not allowed
                threshold: this.threshold // visible amount of item shown in relation to root
            };

            let observer = new IntersectionObserver(function (changes, observer) {
                changes.forEach(change => {
                    let isIntersecting = false;
                    if (change.intersectionRatio > 0) {
                        isIntersecting = true;
                    }
                    self.onInfinite.emit(isIntersecting);
                });
            }, options);

            observer.observe(self.element.nativeElement);
        }
    }


    /**
     *
     */
    checkisLoadedIntersectObserver()
    {
        if ('IntersectionObserver' in window) {
            // supported
            this.isLoadedIntersectObserver = true;
            if (isDevMode()) console.log('IntersectionObserver is loaded');
        } else {
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
    }
}