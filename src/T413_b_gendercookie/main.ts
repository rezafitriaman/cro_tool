

import {Module} from "./utility"

import {TryAndCatch} from "./tryAndCatch"
/*import {CustomEventEmitter} from "./customEventEmitter"
import {FindThatClassFirst} from "./findThatClassFirst"*/
/*import {Debounce} from "./debounce"*/

import {Cookie} from "./cookieCheck"
import {Language} from "./languageCheck"
import {Country} from "./countryCheck"

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Module({
    isDevelop: true,
    style: ``,
    testId:  'T413_b_gendercookie',
    urlReplace: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
})
@Cookie
@Language
@Country
class V1 {
    log : Function; // CUSTOM LOG()
    match : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    gender: string;
    homePage: string;
    curentPage: string;
    topNavigationElm: HTMLElement;
    menElmLink: string;
    womenElmLink: string;

    newLinkMen:string;
    newLinkWomen:string;
    constructor() {
        // code...
        this.gender = this.cookieCheck('gender');
        this.homePage = '/'+this.language()[0].split('_')[0]+this.country();
        this.curentPage = window.location.pathname;

        this.topNavigationElm = document.querySelector('.topNavigation-mainLinks ');

        this.menElmLink = this.topNavigationElm.getElementsByClassName('topNavigation-mainLinks-item')[0].getAttribute('href');
        this.womenElmLink = this.topNavigationElm.getElementsByClassName('topNavigation-mainLinks-item')[1].getAttribute('href');

        this.newLinkMen = this.menElmLink.replace(/shop\//g, '');
        this.newLinkWomen = this.womenElmLink.replace(/shop\//g, '');
    }
    @TryAndCatch
    redirectPage (link:string) {
        window.location.replace(link);
    }
    @TryAndCatch
    changelinksTopNav() {
        this.topNavigationElm.querySelectorAll('.topNavigation-mainLinks-item')[0].setAttribute('href', this.newLinkMen);
        this.topNavigationElm.querySelectorAll('.topNavigation-mainLinks-item')[1].setAttribute('href', this.newLinkWomen);
    }
    @TryAndCatch
    home() {
        if(this.curentPage == this.homePage) {

            if(this.gender == 'men') {
                this.redirectPage(this.newLinkMen);
            }else if(this.gender == 'women') {
                this.redirectPage(this.newLinkWomen);
            }else {

            }
        }else {

            this.changelinksTopNav();
        }
    }
    @TryAndCatch
    cunstomCode() {
        this.home();
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