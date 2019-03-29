"use strict";
/*
==============================
- MAKE SURE DEVELOPE ENVI SET TO FALSE ON PRODUCTION
- MAKE SURE TO SET TESTID
- MAKE SURE TO SET URLORIGIN
==============================
*/
Object.defineProperty(exports, "__esModule", { value: true });
var appendJsOrigin_1 = require("./appendJsOrigin");
var customCodeInit_1 = require("./customCodeInit");
var developEnvi = true;
var testId = "t4u-AFMtest-2";
var urlOrigin = 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.47.0.27977';
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
    customCodeInit_1.customCodeInit();
}
else {
    /*
    ==============================
    CUSTOM CODE INIT
    ==============================
    */
    customCodeInit_1.customCodeInit();
}
