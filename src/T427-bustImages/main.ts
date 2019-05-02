

import {Module, FindThatClassFirst, TryAndCatch} from "./utility"
import {prodId} from "./prodId"

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Module({
    isDevelop: true,
    style: ``,
    testId:  'T427-bustImages',
    urlReplaced: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
})
class V1 {
    log : Function; // CUSTOM LOG()
    match : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    productId: string[];
    productListerTeaser: Function;
    constructor() {
        // code...
        this.productId = prodId();
        this.productListerTeaser = function() {
            let target:any = {};

            if(this.cookieCheck('_GSMARS_PLP2') == 'A') {
                this.log('A');
                target.parentElm = 'productListerTeaser';
                target.secondElm = 'productListerTeaser-imageContainer';
                target.thirdElm = 'productListerTeaser-image--secondary';
            }else if(this.cookieCheck('_GSMARS_PLP2') == 'B' || this.cookieCheck('_GSMARS_PLP2') == 'C') {
                this.log('B');
                target.parentElm = 'productTile';
                target.secondElm = 'productTile-images';
                target.thirdElm = 'productTile-image--secondary';
            }

            return target;
        }
    }
    @TryAndCatch
    cunstomCode() { 
        let context = this;
        let reg: RegExp = /(d?\w+-(\w+)-(\w+))/g;
        let targetObj = this.productListerTeaser();
        let targetElm = document.getElementsByClassName(targetObj.parentElm);

        for (var i = 0; i < targetElm.length; i++) {
            for (var j = 0; j < this.productId.length; j++) {

                if ((<string>targetElm[i].getAttribute("href")).match(reg)[0] == this.productId[j]) {

                    if(targetElm[i].getElementsByClassName(targetObj.secondElm)[0].getElementsByClassName(targetObj.thirdElm).length > 0) {
                        context.log(targetElm[i].getElementsByClassName(targetObj.secondElm)[0].getElementsByClassName(targetObj.thirdElm))
                        let productListerTeaserImageSecondary: Element = targetElm[i].getElementsByClassName(targetObj.secondElm)[0].getElementsByClassName(targetObj.thirdElm)[0];
                        let newId: string = productListerTeaserImageSecondary.getAttribute('data-srcset').replace(/(F02)/g, 'W04');

                        targetElm[i].getElementsByClassName(targetObj.secondElm)[0].getElementsByClassName(targetObj.thirdElm)[0].setAttribute('data-srcset', newId);
                    }
                }
       
                
            }
        }
    }
}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation1:any = new V1();
    /*variation1.cunstomCode();*/
    variation1.cunstomCode();

/*
==============================
END CUSTOM CODE
==============================
*/