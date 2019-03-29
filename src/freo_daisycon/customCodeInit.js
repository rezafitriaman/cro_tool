"use strict";
/*
==============================
IMPORT MODULE | STATIC
UTILITY what we have right now are:

- detect envi

- detect language

- detect country

- detect if cookie has gender entity

- detect media query: if mobile or not

- settimeout in a PROMISE so use .then(), resolve(), reject()

  example use:  delay(6000).then(function(result) {
                  console.log('runs after ' + result);
                  console.log('appended');
                  document.getElementsByClassName('btn--orange')[0].classList.add('reza-custom-master');

                });
- setInterval to find a specifiek element, in a Promise so use .then(), resolve(), reject()

  example use:  find_Elm('.reza-custom-master').then(function(result) {
                  console.log(result);
                });

==============================
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = require("./utility");
/*
==============================
INIT DATA | STATIC
needed for each project
==============================
*/
/*export function data():Object {
  const envi:Object = {
    develop: true,
    testId:  'freo_daisycon',
    urlOrigin: 'https://www.freo.nl//Scripts\/FreoWebsite\/polyfills.js\?v=\d+.\d+.\d.\d+/g'
  }
  return envi;
}*/
var CustomBase = /** @class */ (function (_super) {
    __extends(CustomBase, _super);
    function CustomBase(developEnvi) {
        if (developEnvi === void 0) { developEnvi = true; }
        var _this = this;
        console.log('cc ' + developEnvi);
        // code...
        _this = _super.call(this, developEnvi) || this;
        _this.envi = {
            develop: developEnvi,
            testId: 'freo_daisycon',
            urlOrigin: 'https://www.freo.nl//Scripts\/FreoWebsite\/polyfills.js\?v=\d+.\d+.\d.\d+/g'
        };
        _this.appendJsOrigin(_this.envi.testId, _this.envi.urlOrigin);
        _this.customStyle = function () {
            var style = "\n        <style id=\"t4u-custom-style\">\n        \n        </style>";
            document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
        };
        return _this;
    }
    return CustomBase;
}(utility_1.Utility));
exports.CustomBase = CustomBase;
var var1 = /** @class */ (function (_super) {
    __extends(var1, _super);
    function var1(developEnvi) {
        if (developEnvi === void 0) { developEnvi = true; }
        var _this = 
        // code...
        _super.call(this, developEnvi) || this;
        console.log('aa ' + developEnvi);
        _this.log('reza');
        _this.appendMassage();
        return _this;
    }
    return var1;
}(CustomBase));
var initVar1 = new var1(false);
/*let customVariant = new CustomBase(true);
console.log(customVariant)*/
/*export function customCodeInit (developEnvi:boolean):void {
 */
/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
==============================
*/
/* class CustomBase extends Utility {

   constructor(developEnvi:any) {
     // code...
     super(developEnvi);
   }
 }

 let customVariant = new CustomBase(developEnvi);*/
/*
==============================
END CUSTOM CODE
==============================
*/
/*}*/ 
