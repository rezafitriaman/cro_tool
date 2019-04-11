

import {Module, Debounce, TryAndCatch, FindThatClassFirst} from "./utility"

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Module({
    isDevelop: false,
    style: `
        .dialog--cookie {
            display: flex;
            display: -webkit-box!important;
            display: -ms-flexbox!important;
            display: flex!important;
            -webkit-box-align: end!important;
            -ms-flex-align: end!important;
            align-items: flex-end!important;
            -webkit-box-pack: center!important;
            -ms-flex-pack: center!important;
            justify-content: center!important;
        }
        .js-cookieAccept {
            max-width: 360px!important;
        }
        @media (min-width: 768px) {
            .dialog--cookieWall .dialog-content {
                max-width: calc(420px - 30px * 2)!important;
            }
        }
    `,
    testId:  'T425(2)_Cookiewall_2',
    urlReplaced: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
})
class base {
    log : Function; // CUSTOM LOG()
    match : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE
    constructor() {
    // code...

    }
    bottomFix() {
        let pathName:string = document.location.pathname;
        var mathematics = pathName.match(/style-mathematics/g);
        this.log(mathematics);
        if(mathematics) {
            if(document.getElementsByClassName('dialog').length > 0) {
                (<HTMLElement>document.getElementsByClassName('dialog')[0]).style.bottom = '54px';
            }
        }
    }
}

class V1 extends base {
    constructor() {
        // code...
        super();
    }
    @TryAndCatch
    customCode() {
        this.bottomFix();
    }
}

class V2 extends base {
    constructor() {
        // code...
        super();
    }
    @FindThatClassFirst
    @TryAndCatch
    customCode(targetClass:string) {
        document.documentElement.classList.remove(targetClass);
        let dialogCookieWall:HTMLCollection = document.getElementsByClassName('dialog--cookieWall');
        let buttonCookieAccept:HTMLCollection = document.getElementsByClassName('button__cookieAccept');
        let dialogsContainer:HTMLElement = document.getElementById('dialogsContainer');
        let dialogContent:HTMLCollection = document.getElementsByClassName('dialog-content');



        if (dialogCookieWall[0]) {

            (<HTMLElement>dialogCookieWall[0]).style.backgroundColor = 'transparent';
            (<HTMLElement>buttonCookieAccept[0]).style.pointerEvents = 'auto';

            (<HTMLElement>dialogContent[0]).style.pointerEvents = 'auto';

            dialogsContainer.style.pointerEvents = 'none';
        }

        this.bottomFix();
    }
}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

/*let variation1 = new V1();
    variation1.customCode();*/

let variation2 = new V2();
    variation2.customCode('has-preventBackgroundScroll');

/*
==============================
END CUSTOM CODE
==============================
*/