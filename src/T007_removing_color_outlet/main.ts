
import {Develop} from "./develop"

import {TryAndCatch} from "./tryAndCatch"
import {CustomEventEmitter} from "./customEventEmitter"
/*import {FindThatClassFirst} from "./findThatClassFirst"
import {Debounce} from "./debounce"*/

/*import {Cookie} from "./cookie"
import {Language} from "./languages"
import {Country} from "./country"
import {Style} from "./style"
import {MediaQuery} from "./mediaQuery"*/
import {CustomLog} from "./log"
/*import {NodeListExist} from "./nodeListExist"*/

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Develop({
    isDevelop: false,
    testId:  'T007_removing_color_outlet',
    urlReplaced: 'https://outlet.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
})
class V1 {
    //STANDARD PROPERTY
    log : Function; // CUSTOM LOG()
    mediaQuery : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    //PUT HERE UR NODELIST - SELECTOR

    //PUT OTHERS HERE
    removeColorName: Function;
    onHoverRemoveColor:Function;
    constructor() {
        // code...
        this.removeColorName = function (targetElm:string) {
            // body...

            let colorNameElm = document.getElementsByClassName(targetElm);

            for (var i = 0; i < colorNameElm.length; i++) {
                colorNameElm[i].innerHTML = '';
            }
        }

    }
    @CustomEventEmitter('filterUsed', 'productLister-resultCount--header')
    @TryAndCatch
    cunstomCode() {
        let context = this;

        let target:HTMLCollection = document.getElementsByClassName('productLister-resultCount--header');

        context.removeColorName('productListerTeaser-color');

        target[0].addEventListener('filterUsed', function(e) {
            context.removeColorName('productListerTeaser-color');

        });
    }
}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation:any = new V1();
    variation.cunstomCode();

/*
==============================
END CUSTOM CODE
==============================
*/
