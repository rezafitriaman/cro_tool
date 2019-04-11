
import {Module, FindThatClassFirst, Debounce, TryAndCatch, CustomEventEmitter} from "./utility"

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Module({
    isDevelop: false,
    style: ``,
    testId: 'T007_[PLP]_removing_color_name',
    urlReplaced: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
})
class V1 {
    log : Function; // CUSTOM LOG()
    match : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT THE COOKIE-VALUE

    pageVersion: String;
    removeColorName: Function;
    onHoverRemoveColor:Function;
    constructor() {
        // code...
        this.pageVersion = this.cookieCheck('_GSMARS_PLP2');
        this.removeColorName = function (targetElm:string) {
            // body...
            let colorNameElm = document.getElementsByClassName(targetElm);

            for (var i = 0; i < colorNameElm.length; i++) {
                colorNameElm[i].innerHTML = '';
            }
        }
        this.onHoverRemoveColor = function(targetElm:string) {
            for (var i = 0; i < document.getElementsByClassName(targetElm).length; i++) {
                document.getElementsByClassName(targetElm)[i].addEventListener('mouseenter', function() {
                    let context = this;
                    setTimeout(function(){
                        context.closest('.productTile-info').getElementsByClassName('productTile-info-container')[0].getElementsByClassName('productTile-color')[0].innerHTML = ''; 
                     }, 50);
                });
            }
        }
            
    }
    @CustomEventEmitter('filterUsed')
    @TryAndCatch
    pageVersionA(targetClass:string) {
        if (this.pageVersion == 'A' || this.pageVersion == null) {
            let context = this;
            let target:HTMLCollection = document.getElementsByClassName(targetClass);

            context.log(this.pageVersion)
            context.removeColorName('productListerTeaser-color');

            target[0].addEventListener('filterUsed', function(e) {
                context.removeColorName('productListerTeaser-color');
                context.log('custom event use');
            });
        }
    }
    @CustomEventEmitter('filterUsed')
    @TryAndCatch
    pageVersionBC(targetClass:string) {
        if (this.pageVersion == 'B' || this.pageVersion == 'C') {
            let target:HTMLCollection = document.getElementsByClassName(targetClass);
            let context = this;
            context.log('pageVersionB')
            context.log(target);

            context.removeColorName('productTile-color');
            context.onHoverRemoveColor('productTile__style-variant');

            target[0].addEventListener('filterUsed', function(e) {
                context.removeColorName('productTile-color');
                context.onHoverRemoveColor('productTile__style-variant');
            });
        }
    }
}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation1:any = new V1();
    variation1.pageVersionA('productLister-resultCount--header');
    /*variation1.pageVersionBC('productLister-productTileInner');*/

    

/*
==============================
END CUSTOM CODE
==============================
*/