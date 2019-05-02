/*import {Module} from "./utility"*/

import {TryAndCatch} from "./tryAndCatch"
/*import {CustomEventEmitter} from "./customEventEmitter"
import {FindThatClassFirst} from "./findThatClassFirst"
import {Debounce} from "./debounce"*/

/*import {Cookie} from "./cookieCheck"*/
import {Language} from "./languageCheck"
import {Country} from "./countryCheck"

import menId from "./menIdList"
import womenId from "./womenIdList"


/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

/*@Module({
    isDevelop: true,
    style: ``,
    testId:  'T426_PDP_banner',
    urlReplaced: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
})*/
@Country
@Language
class V1 {
    log : Function; // CUSTOM LOG()
    match : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    newLink : any;
    menId : Array<string>;
    womenId : Array<string>;
    pathName :string;
    constructor() {
        // code...
        this.menId = menId;
        this.womenId = womenId;
        this.pathName = location.pathname;
        this.newLink = {
            men: `https://www.g-star.com/${this.language()[0]}${this.country()[0].split('_')[1]}/shop/men/its_you_own_it`,
            women: `https://www.g-star.com/${this.language()[0]}${this.country()[0].split('_')[1]}/shop/women/its_you_own_it`
        };
    }
    @TryAndCatch
    button(link:any) {
        if(document.getElementsByClassName('contentBlock').length > 0) {
            let button:HTMLCollection = document.getElementsByClassName('contentBlock')[0].getElementsByClassName('contentBlock-body-link');
            for (var i = 0; i < button.length; i++) {
                button[i].setAttribute('href', link);
            }
        }
    }
    @TryAndCatch
    loopId(target: Array<string>, where: string) {
        let context = this;
        let pathNameId = this.pathName.match(/\d+-(.+)-(.+)|\w+-(.+)-(.+)/);

        for (var i = 0; i < target.length; i++) {
            //men or woman          
            if(target[i] == pathNameId[0]) {

                if(where == 'men') {
                    context.button(context.newLink.men);
                }else {
                    context.button(context.newLink.women);
                }
            }
        }
    }
    @TryAndCatch
    customCode() {
        this.loopId(this.menId, 'men');
        this.loopId(this.womenId, 'women');
    }
}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation1:any = new V1();
    variation1.customCode();

/*
==============================
END CUSTOM CODE
==============================
*/