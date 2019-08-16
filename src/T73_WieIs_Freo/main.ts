
import {Develop} from "./develop"

import {TryAndCatch} from "./tryAndCatch"
import {CustomLog} from "./log"
import {NodeListExist} from "./nodeListExist"
import {Style} from "./style"
import {MediaQuery} from "./mediaQuery"

let htmlString = require('./htmlStringTemplate');
/*import {CustomEventEmitter} from "./customEventEmitter"*/
/*import {FindThatClassFirst} from "./findThatClassFirst"*/
/*import {Debounce} from "./debounce"*/

/*import {Cookie} from "./cookie"
import {Language} from "./languages"
import {Country} from "./country"
import {MediaQuery} from "./mediaQuery"*/

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Develop({
    isDevelop: true,
    testId:  'T73_WieIs_Freo',
    urlReplaced: 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.51.0.26747'
})
@Style(`
    .klantervaringen--quote__wrapper .flickity-page-dots {
        display: none;
    }
    .block--grey .page-title {
        font-size : 32px;
    }
    .block--grey .intro {
        font-size : 18px;
    }
    .block--grey a {
        margin-top: 30px!important;
    }
    .klantervaringen--quote {
        min-height: 270px;
    }
    @media (min-width:992px){
        .grid--one-third-two-third-l {
            grid-template-columns: 2fr 2fr!important;
        }
        .klantervaringen--quote__wrapper blockquote {
            margin: 50px 0px 0px!important
        }
        .push.block--grey {
            margin-bottom: 55px;
        }
    }
    @media (max-width:992px){
        .klantervaringen--quote {
            padding: 0!important;
        }
        .klantervaringen--quote__wrapper blockquote {
            margin: 0px 0px 0px!important
        }
        blockquote p {
            margin: 0px;
        }
        .push.block--grey .grid__item  {
            padding-bottom: 0px;
            padding-top: 0px;
        }
        .push.block--grey .section  {
            margin-top: 0px;
        }
    }
`)
@CustomLog
@MediaQuery
class Base {
    //STANDARD PROPERTY
    log : Function; // CUSTOM LOG()
    mediaQuery : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    //PUT HERE UR NODELIST - SELECTOR
    @NodeListExist
    targetToAppend : NodeList;
    //PUT OTHERS HERE
    htmlStringTemplate : string;
    variant1 : Object;
    variant2 : Object;
    constructor() {
        // code...
        this.htmlStringTemplate = htmlString;
        this.targetToAppend = document.querySelectorAll('.section--fullwidth');
    }
    @TryAndCatch
    appendString() {
        (<Element>this.targetToAppend[0]).insertAdjacentHTML('beforebegin', this.htmlStringTemplate);
    }
    @TryAndCatch
    appendText(variation:any) {
        let pageTitle:Element = document.querySelectorAll('.block--grey')[1].querySelector('.page-title');
        let intro = document.querySelectorAll('.block--grey')[1].querySelector('.intro');

        (<HTMLElement>pageTitle).innerText = variation['heading'];
        (<HTMLElement>intro).innerText = variation['subtekst'];
    }
    msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");
        var browser;

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
        {
            browser = 'ie';
        }
        else  // If another browser, return 0
        {
            browser = 'otherBrowser';
        }

        return browser;
    }
    @TryAndCatch
    ieFix(target:NodeList) {
        if(this.msieversion() == 'ie') {
            if(this.mediaQuery('992') == 'desktop or tablet') {

                for (var i = target.length - 1; i >= 0; i--) {

                    (<any>target[i]).style.width = '50%';
                }
            }
            if(this.mediaQuery('992') == 'mobile') {
       
                for (var i = target.length - 1; i >= 0; i--) {

                    (<any>target[i]).style.width = '100%';
                }
            }
        }
    }
    @TryAndCatch
    cunstomCode() {
        
    }
}

class V1 extends Base {
    
    constructor() {
        // code...
        super();
            this.variant1 = {
                heading : "Wie is Freo",
                subtekst : "Freo is specialist in online lenen. Bij ons leent u tegen scherpe tarieven. Dit gebeurt op een eerlijke, zorgvuldige en verantwoorde manier. Met onze persoonlijke service en duidelijke voorwaarden weet u precies waar u aan toe bent."
            }
    }
    @TryAndCatch
    cunstomCode() {
        let _this = this;
  
        _this.appendString(); 
        _this.appendText(_this.variant1);

        let target = document.querySelectorAll('.block--grey')[1].querySelectorAll('.grid__item');
        _this.ieFix(target)
    }
}

class V2 extends Base {
    
    constructor() {
        // code...
        super();
        this.variant2 = {
            heading : "Geen verrassingen bij Freo",
            subtekst : "Als u geld gaat lenen, heeft u geen zin in verrassingen. Bij Freo weet u van tevoren precies waar u aan toe bent. Freo biedt eerlijke met voordelige rentes en heldere voorwaarden. Zonder addertjes onder het gras. Bij Freo weet u wat u leent."
        }
        this.log(document.querySelectorAll('.block--grey')[1].querySelectorAll('.grid__item'))
    }
    @TryAndCatch
    cunstomCode() {
        let _this = this;
  
        _this.appendString(); 
        _this.appendText(_this.variant2);

        let target = document.querySelectorAll('.block--grey')[1].querySelectorAll('.grid__item');
        _this.ieFix(target)
    }    
}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation:any = new V2();
    variation.cunstomCode();

/*
==============================
END CUSTOM CODE
==============================
*/