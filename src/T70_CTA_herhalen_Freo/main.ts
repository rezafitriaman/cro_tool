
import {Develop} from "./develop"

import {TryAndCatch} from "./tryAndCatch"
/*import {CustomEventEmitter} from "./customEventEmitter"
import {FindThatClassFirst} from "./findThatClassFirst"
import {Debounce} from "./debounce"

import {Cookie} from "./cookie"
import {Language} from "./languages"
import {Country} from "./country"*/
import {Style} from "./style"
/*import {MediaQuery} from "./mediaQuery"
import {CustomLog} from "./log"
import {NodeListExist} from "./nodeListExist"*/

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Develop({
    isDevelop: false,
    testId:  'T70_CTA_herhalen_Freo',
    urlReplaced: 'https://www.freo.nlScripts/FreoWebsite/polyfills.js'
})
@Style(`
    .usp {
        background-color : #F6F6F7!important;
    }
    .usp .usp__item a, .usp__item a:hover {
        color: #636a73!important;
    }
`)
class base {
    //STANDARD PROPERTY
    log : Function; // CUSTOM LOG()
    mediaQuery : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    //PUT HERE UR NODELIST - SELECTOR

    //PUT OTHERS HERE

    constructor() {
        // code...

    }
    @TryAndCatch
    cunstomCode() {
        
    }
}

@Style(`
    .usp .icon.icon-check {
        color: #13B938!important;
    }
`)
class V1 extends base {
    
    constructor() {
        // code...
        super();
    }
}

@Style(`
    .usp .icon.icon-check {
        color: #F28231!important;
    }
`)
class V2 extends base {
    
    constructor() {
        // code...
        super();
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