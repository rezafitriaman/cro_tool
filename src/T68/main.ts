
/*
==============================
IMPORT STATIC MODULE
its needed for eatch project
==============================
*/

import {appendJsOrigin} from "./appendJsOrigin"
import {customCodeInit} from "./customCodeInit"
import {customStyle} from "./customStyle"

/*
==============================
- MAKE SURE DEVELOPE ENVI SET TO FALSE ON PRODUCTION
- MAKE SURE TO SET TESTID = IT SET IT SELF FROM GULP :)
- MAKE SURE TO SET URLORIGIN = IT SET IT SELF FROM GULP :)
==============================
*/

let developEnvi:boolean = true;
let testId: string = "T68";
let urlOrigin: string = 'https://www.g-star.com/Scripts/FreoWebsite/polyfills.js?v=4.47.0.20752';

//DEV ENVI OR NAH
if(developEnvi) {
  console.log('%c<-------------------DEV ENVI' + '-------------------' + testId + '------------------->', "color: green; font-size:16px;")
    
    /*
  ==============================
  APPEND ORIGIN JS ON DEVELOPMENT ENVI
  ==============================
  */

  appendJsOrigin(testId, urlOrigin);

  /*
  ==============================
  STYLE INIT
  ==============================
  */

    customStyle();

  /*
  ==============================
  CUSTOM CODE INIT
  ==============================
  */
    customCodeInit(developEnvi);

}else {

  /*
  ==============================
  STYLE INIT
  ==============================
  */

    customStyle();

  /*
  ==============================
  CUSTOM CODE INIT
  ==============================
  */

    customCodeInit(developEnvi);
}