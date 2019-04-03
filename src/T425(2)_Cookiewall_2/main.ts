

import {Module, FindTargetFirst, Debounce, TryAndCatch} from "./utility"

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Module({
    isDevelop: false,
    style: `
        body:not(.has-activeFullScreenDialog) .dialog {
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
                max-width: calc(2155px - 30px * 2)!important;
            }
        }
    `,
    testId:  'T425(2)_Cookiewall_2',
    urlReplaced: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
})
class V1 {
    log : Function; // CUSTOM LOG()
    match : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE
    constructor() {
    // code...

    }
    @TryAndCatch
    cunstomCode() {
        
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