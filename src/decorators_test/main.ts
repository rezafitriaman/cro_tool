import {Module, FindTargetFirst, Debounce} from "./utility"

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Module({
    develop: true,
    style: `<style id="t4u-custom-style"></style>`,
    testId:  'decorators_test',
    urlReplaced: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
})
class V1 {
    log : Function; // CUSTOM LOG()
    match : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE
    delay : Function; // DELAY FUNCTION - IT MADE WITH A PROMISE(); 
    constructor() {
        // code...
    }
    @Debounce(7000)
    innerTextAppend(targetElm:string, text:string) {
        this.log(`Do ur innerTextAppend`);
        document.querySelectorAll(targetElm)[0].innerHTML = text;
    }
}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variationOne:any = new V1();
variationOne.innerTextAppend('.jeans-fitguide__header-title-main', 'hello master Reza');

/*
==============================
END CUSTOM CODE
==============================
*/