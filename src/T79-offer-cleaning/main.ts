
import {Develop} from "./develop"

import {TryAndCatch} from "./tryAndCatch"
import {CustomEventEmitter} from "./customEventEmitter"
import {FindThatClassFirst} from "./findThatClassFirst"
import {Debounce} from "./debounce"

import {Cookie} from "./cookie"
import {Language} from "./languages"
import {Country} from "./country"
import {Style} from "./style"
import {MediaQuery} from "./mediaQuery"
import {CustomLog} from "./log"
import {NodeListExist} from "./nodeListExist"

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Develop({
    isDevelop: true,
    testId:  'T79-offer-cleaning',
    urlReplaced: 'https://www.freo.nlScripts/FreoWebsite/polyfills.js?v=4.62.0.16987'
})
@CustomLog
class V1 {
    //STANDARD PROPERTY
    log : Function; // CUSTOM LOG()
    mediaQuery : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    //PUT HERE UR NODELIST - SELECTOR
    stepsIndicator : Element;
    hooksElm : Element;
    usp : Element;
    contactSnippet : Element;
    submitStep1 : Element;
    //PUT OTHERS HERE

    constructor() {
        // code...
        // POLYFILL
        if (!('remove' in Element.prototype)) {
            // @ts-ignore
            Element.prototype.remove = function() {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }
        this.submitStep1 = document.querySelector('#submit-step-1');
        this.contactSnippet = document.querySelector('.contact-snippet');
        this.stepsIndicator = document.querySelector('.c-application-form__steps-indicator');
        this.hooksElm = document.querySelector('.breadcrumbs-container');
        this.usp = document.querySelector('.usp');
    }
    @TryAndCatch
    appendTarget(): void {
        this.hooksElm.insertAdjacentElement('beforebegin', this.stepsIndicator);
        this.log('appendTarget')
    }
    @TryAndCatch
    deleteUSP(): void {
        this.usp.remove();
        this.log('deleteUSP');
    }
    @TryAndCatch
    deleteContactSnippet(): void {
        this.contactSnippet.remove();
        this.log('deleteContactSnippet ');
        document.querySelectorAll('.contact-snippet')[0].remove()
    }
    @TryAndCatch
    changeTextSubmitBTN(): void {
        this.submitStep1.innerHTML = 'Uw Gegevens';
        this.log('changeTextSubmitBTN');
    }
    @TryAndCatch
    customCode() {
        this.appendTarget();
        this.deleteUSP();
        this.deleteContactSnippet();
        this.changeTextSubmitBTN();
        this.log('V1');

        document.querySelector('.page-title').innerHTML = 'Hello bGenius!';
    }
}

@Style(`
    @media only screen and (max-width : 991px) {
        .main-nav__links-cta {
            margin-right: 10px!important;
            
        }
        .main-nav__links-cta .main-nav__item:nth-child(3n) {
            display: none!important;
        }
    }
`)
class V2 extends V1 {
    nav: Element;
    constructor () {
        super();
        this.nav = document.querySelector('.main-nav__list');
    }
    @TryAndCatch
    deleteNav(): void {
        let navList : NodeList = this.nav.querySelectorAll('.main-nav__item');
        for (let i = 0; i < navList.length; i++) {
            let listItem = navList[i] as Element;
            listItem.remove();
        }
        this.log('deleteNav');
    }
    @TryAndCatch
    customCode() {
        super.customCode();
        this.deleteNav();
        this.log('V2');
    }
}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation:any = new V1();
    variation.customCode();

/*
==============================
END CUSTOM CODE
==============================
*/
