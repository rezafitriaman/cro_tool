
import {Develop} from "./develop"

import {TryAndCatch} from "./tryAndCatch"
import {CustomLog} from "./log"
/*import {CustomEventEmitter} from "./customEventEmitter"
import {FindThatClassFirst} from "./findThatClassFirst"
import {Debounce} from "./debounce"

import {Cookie} from "./cookie"
import {Language} from "./languages"
import {Country} from "./country"
import {Style} from "./style"
import {MediaQuery} from "./mediaQuery"
import {CustomLog} from "./log"
import {NodeListExist} from "./nodeListExist"*/

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Develop({
    isDevelop: true,
    testId:  'T75_Kassabon',
    urlReplaced: 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.51.0.20905'
})
@CustomLog
class Base {
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

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation:any = new Base();
    variation.cunstomCode();

/*
==============================
END CUSTOM CODE
==============================
*/