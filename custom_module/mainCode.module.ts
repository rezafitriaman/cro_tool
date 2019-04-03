exports.str = `

import {Module, FindTargetFirst, Debounce, TryAndCatch} from "./utility"

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Module({
    isDevelop: true,
    style: \`\`,
    testId:  '0000',
    urlReplaced: 'origin_url_string'
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
*/`;