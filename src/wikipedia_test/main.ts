
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
    testId:  'wikipedia_test',
    urlReplaced: 'https://nl.wikipedia.org/w/index.php?title=User:Krinkle/OpenStreetMapFrame.js&action=raw&ctype=text/javascript'
})
class V1 {
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
    customCode() {
        
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