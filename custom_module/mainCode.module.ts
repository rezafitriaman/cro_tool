export function mainCode() {
let mainCode_str: string = `
import {Module, FindTargetFirst, Debounce} from "./utility"

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Module({
    develop: true,
    style: \`<style id="t4u-custom-style"></style>\`,
    testId:  '0000',
    urlReplaced: 'origin_url_string'
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
    cunstomCode() {

    }
}

/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variationOne:any = new V1();
variationOne.cunstomCode();

/*
==============================
END CUSTOM CODE
==============================
*/`;

return mainCode_str;
}