
/*
==============================
IMPORT STATIC MODULE
its needed for eatch project
==============================
*/

import {appendJsOrigin} from "./appendJsOrigin"
import {customCodeInit, data} from "./customCodeInit"
import {customStyle} from "./customStyle"
/*
==============================
- MAKE SURE DEVELOPE ENVI SET TO FALSE ON PRODUCTION
- MAKE SURE TO SET TESTID = IT SET IT SELF FROM GULP :)
- MAKE SURE TO SET URLORIGIN = IT SET IT SELF FROM GULP :)
==============================
*/
const envi:any = data();

let developEnvi:boolean = envi.develop;
let testId: string = envi.testId;
let urlOrigin: string = envi.urlOrigin;

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