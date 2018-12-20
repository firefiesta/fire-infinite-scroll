# fire-infinite-scroll
Infinite Scroll for Ionic 3+


`I created this project because ion-infinite-scroll native ionic did not work properly within Sliders since it was necessary to put an ion-content inside the slider which made the scroll of the Slider not work correctly. In the Examples section, you will find one with Sliders.

##Compatibility
Ionic 3+

##Quick Example

#### .html
```
<fire-infinite-scroll
   [disabled]="!pagingEnabled"
   (onInfinite)="onInfinite($event)">
</fire-infinite-scroll>
```
// $event return true if is visible , return false if is not

#### .ts
```
    onInfinite(event: any)
    {
        if(event) {
            // load more items
        }
    }
```
##Installation

```
npm i fire-infinite-scroll
```

###Import it in your app's module(s)

```
import { FireInfiniteScrollModule } from "fire-infinite-scroll";

@NgModule({
    ...
    imports: [
      ...
      FireInfiniteScrollModule.forRoot()
      ],
    ...
})
export class AppModule {}
```

#### If your app uses lazy loading, you need to import FireInfiniteScrollModule in your shared module or child modules:
```
import { FireInfiniteScrollModule } from "fire-infinite-scroll";

@NgModule({
    ...
    imports: [
      ...
      FireInfiniteScrollModule
      ],
    ...
})
export class SharedModule {}
```

##Usage

### Inputs

##### disabled
> (optional) If it is false it shows loading icon. If it is true, disabled loading
##### iconName
> (optional) Default crescent
##### text
> (optional) Text to show below the icon or image.
#### image
> (optional) If you want to show an image instead of an ionic icon, you must pass an object image with the following data : 
```image: {class_name: string, url: string, alt: string}```
### root
> (optional) The element that is used as the viewport for checking visiblity of the target. Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null. Default this (element fire-infinite-scroll)
### rootMargin
> (optional) Margin around the root. Can have values similar to the CSS margin property, e.g. "10px 20px 30px 40px" (top, right, bottom, left). The values can be percentages. This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections. Margin around root. Values are similar to css property. Unitless values not allowed. Default 0px
### threshold
> (optional) Visible amount of item shown in relation to root. A threshold of 1.0 means that when 100% of the target is visible within the element specified by the root option, the callback is invoked.
 Default 1.0

### Outputs

#### onInfinite
> Return true when fir-infinite-scroll is visible, and false when it is not.



## Browser compatibility
For compatibility with Safari and other browsers (in webviews),
you must install IntersectionObserver polyfill

```
npm install intersection-observer --save
```

y agregarlo a  `maint.ts`

```
import 'intersection-observer/intersection-observer';
```

## License
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details

## Examples in Slides
#### .html
```
<ion-grid fixed no-padding="0">
    <ion-slides #slider (ionSlideDidChange)="slideChanged()">
        <ion-slide>
            <ion-grid>
                <ion-row>
                    <ion-col col-md-6 col-12 *ngFor="let items of listItems">
                        <custom-component [item]="item"></custom-component>
                    </ion-col>
                    <ion-col col-12 *ngIf="items?.length === 0">
                        <p ion-text class="text-center" color="primary">
                            No items
                        </p>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col *ngIf="listItems?.length >= limit" col-12 text-center>
                        <fire-infinite-scroll
                                [disabled]="!pagingEnabled"
                                (onInfinite)="onInfinite($event)">
                        </fire-infinite-scroll>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-slide>
      
        ..... more ion-slide
    </ion-slides>
</ion-grid>
```

#### .css
```
ion-slide .slide-zoom {
    height: 100vh;
    overflow-y: scroll;
}
```

#### .ts
```
pagingEnabled : boolean = true;

onInfinite(event: any)
{
    if(event) {
        this.getItemsPaginate();
    }
}

getItemsPaginate()
{
  this.httpService.getItemsPaginate(this.limit, this.offset).subscribe(
        (items:any) => {
            if (items.length > 0){
                for (let i in items) {
                    this.listItems.push(items[i]);
                }
                
                if (this.isTablet) {
                    this.offset += this.offsetTablet;
                } else {
                    this.offset += 4;
                }
            } else {
                this.pagingEnabled = false;
            }
        },
        (error: any) => {}
    );
}
```