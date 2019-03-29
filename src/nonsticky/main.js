"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
==============================
- MAKE SURE DEVELOPE ENVI SET TO FALSE ON PRODUCTION
- MAKE SURE TO SET TESTID
- MAKE SURE TO SET URLORIGIN
==============================
*/
var appendJsOrigin_1 = require("./appendJsOrigin");
var customCodeInit_1 = require("./customCodeInit");
var developEnvi = false;
var testId = "nonsticky";
var urlOrigin = 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js';
//DEV ENVI OR NAH
if (developEnvi) {
    console.log('%c<-------------------DEV ENVI' + '-------------------' + testId + '------------------->', "color: green; font-size:16px;");
    /*
    ==============================
    APPEND ORIGIN JS ON DEVELOPMENT ENVI
    ==============================
    */
    appendJsOrigin_1.appendJsOrigin(testId, urlOrigin);
    /*
    ==============================
    CUSTOM CODE INIT
    ==============================
    */
    customCodeInit_1.customCodeInit(developEnvi);
}
else {
    /*
    ==============================
    CUSTOM CODE INIT
    ==============================
    */
    customCodeInit_1.customCodeInit(developEnvi);
}
