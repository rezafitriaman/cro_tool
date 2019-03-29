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
var CustomBase = /** @class */ (function (_super) {
    __extends(CustomBase, _super);
    function CustomBase(developEnvi) {
        if (developEnvi === void 0) { developEnvi = true; }
        var _this = 
        // code...
        _super.call(this, developEnvi) || this;
        _this.envi = {
            develop: developEnvi,
            testId: 'freo_daisycon',
            urlOrigin: 'https://www.freo.nl/Scripts\/FreoWebsite\/polyfills.js\?v=\d+.\d+.\d.\d+/g'
        };
        _this.appendJsOrigin(_this.envi.testId, _this.envi.urlOrigin);
        _this.customStyle = function () {
            var style = "\n        <style id=\"t4u-custom-style\">\n        \n        </style>";
            document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
        };
        _this.appendMassage(_this.envi.testId);
        return _this;
    }
    return CustomBase;
}(utility_1.Utility));
exports.CustomBase = CustomBase;
/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
==============================
*/
var daisycon = /** @class */ (function (_super) {
    __extends(daisycon, _super);
    function daisycon(developEnvi) {
        if (developEnvi === void 0) { developEnvi = true; }
        var _this = 
        // code...
        _super.call(this, developEnvi) || this;
        _this.regxp = /(daisycon)/g;
        _this.search = document.location.search;
        _this.found = _this.search.match(_this.regxp);
        _this.data = JSON.parse(sessionStorage.getItem('daisycon')) ? sessionStorage.getItem('daisycon') : false;
        return _this;
    }
    daisycon.prototype.pushData = function () {
        if (this.search.length == 0 && this.data == false) {
            this.log('not daisyaaa');
        }
        else if (this.search.length > 0) {
            if (this.data) {
                this.log('from daisycon: push data Layer');
                dataLayer = [{
                        'name': 'daisycon'
                    }];
            }
            else {
                console.log('daisy');
                var exist = true;
                this.log(exist);
                sessionStorage.setItem('daisycon', JSON.stringify(exist));
                this.log('from daisycon: Set it');
                this.log('from daisycon: push data Layer');
                dataLayer = [{
                        'name': 'daisycon'
                    }];
            }
        }
        else {
            dataLayer = [{
                    'name': 'daisycon'
                }];
            this.log('daisy go to other page');
        }
    };
    return daisycon;
}(CustomBase));
var theyComeFromDaisycon = new daisycon(false);
theyComeFromDaisycon.pushData();
/*
==============================
END CUSTOM CODE
==============================
*/ 
