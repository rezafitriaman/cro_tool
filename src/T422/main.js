"use strict";
/*
==============================
IMPORT STATIC MODULE
its needed for eatch project
==============================
*/
Object.defineProperty(exports, "__esModule", { value: true });
var appendJsOrigin_1 = require("./appendJsOrigin");
var customCodeInit_1 = require("./customCodeInit");
var customStyle_1 = require("./customStyle");
/*
==============================
- MAKE SURE DEVELOPE ENVI SET TO FALSE ON PRODUCTION
- MAKE SURE TO SET TESTID = IT SET IT SELF FROM GULP :)
- MAKE SURE TO SET URLORIGIN = IT SET IT SELF FROM GULP :)
==============================
*/
var envi = customCodeInit_1.data();
var developEnvi = envi.develop;
var testId = envi.testId;
var urlOrigin = envi.urlOrigin;
//DEV ENVI OR NAH
if (developEnvi) {
    console.log('%c<-----------DEV ENVI' + '-----------' + testId + '----------->', "color: green; font-size:16px;");
    /*
    ==============================
    APPEND ORIGIN JS ON DEVELOPMENT ENVI
    ==============================
    */
    appendJsOrigin_1.appendJsOrigin(testId, urlOrigin);
    /*
    ==============================
    STYLE INIT
    ==============================
    */
    customStyle_1.customStyle();
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
    STYLE INIT
    ==============================
    */
    customStyle_1.customStyle();
    /*
    ==============================
    CUSTOM CODE INIT
    ==============================
    */
    customCodeInit_1.customCodeInit(developEnvi);
}
