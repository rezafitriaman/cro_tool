

/*import {Module} from "./utility"*/

import {TryAndCatch} from "./tryAndCatch"
/*import {CustomEventEmitter} from "./customEventEmitter"
import {FindThatClassFirst} from "./findThatClassFirst"
import {Debounce} from "./debounce"

import {Cookie} from "./cookieCheck"
import {Language} from "./languageCheck"
import {Country} from "./countryCheck"*/

import string from "./htmlString"

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

/*@Module({
    isDevelop: true,
    style: ``,
    testId:  'T425_brand_campaign',
    urlReplace: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
})*/
class V1 {
    log : Function; // CUSTOM LOG()
    match : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE
    
    htmlString: string;
    prevButton: Element;
    nextButton: Element;
    constructor() {
        // code...
        this.htmlString = string;
    }
    @TryAndCatch
    cunstomCode() {
        let context = this;
        let slide = function() {
            let target = this.parentNode.getElementsByClassName('gridCarousel-inner')[0].getElementsByClassName('gridCarousel-item');
            
            for (var i = 0; i < target.length; i++) {
                
                if(target[i].classList.contains('is-active')) {
                    target[i].classList.remove('is-active');
                }else {
                    target[i].classList.add('is-active');
                }
            }
        }
        if(document.getElementsByClassName('contentBlock--subTitleUltra').length > 1) {

            document.getElementsByClassName('contentBlock--subTitleUltra')[0].remove();
            document.getElementsByClassName('grid')[0].getElementsByClassName('js-row')[1].getElementsByClassName('col')[0].innerHTML = this.htmlString;

            document.getElementsByClassName('gridCarousel-prevnext--prev')[0].addEventListener('click', slide)
            document.getElementsByClassName('gridCarousel-prevnext--next')[0].addEventListener('click', slide)
        }
    }
}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/
    let variation1:any = new V1();
    variation1.cunstomCode();


/*
==============================
END CUSTOM CODE
==============================
*/