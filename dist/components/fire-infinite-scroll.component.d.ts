import { ElementRef, EventEmitter, AfterViewInit, OnInit } from '@angular/core';
export declare class FireInfiniteScroll implements AfterViewInit, OnInit {
    element: ElementRef;
    isLoadedIntersectObserver: boolean;
    disabled: boolean;
    iconName: string;
    image: {
        class_name: string;
        url: string;
        alt: string;
    };
    text: any;
    root: any;
    rootMargin: any;
    threshold: any;
    onInfinite: EventEmitter<{}>;
    /**
     *
     * @param element
     */
    constructor(element: ElementRef);
    ngOnInit(): void;
    /**
     *
     */
    ngAfterViewInit(): void;
    /**
     *
     */
    checkisLoadedIntersectObserver(): void;
}
