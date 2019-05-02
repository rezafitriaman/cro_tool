exports.str = `
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

@Module({
    isDevelop: true,
    testId:  '0000',
    urlReplaced: 'origin_url_string'
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
*/`;