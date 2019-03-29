"use strict";
/*
==============================
IMPORT MODULE | STATIC
its needed for eatch project
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
var log_1 = require("./log");
var language_1 = require("./language");
var country_1 = require("./country");
var cookie_1 = require("./cookie");
var mediaQuery_1 = require("./mediaQuery");
/*
==============================
INIT DATA | STATIC
needed for each project
==============================
*/
function data() {
    var envi = {
        develop: false,
        testId: 'T366B_outlet',
        urlOrigin: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
    };
    return envi;
}
exports.data = data;
function customCodeInit(developEnvi) {
    /*
    ==============================
    INIT CUSTOM LOG, language, country | STATIC
    so we can make a switch(on/of) if we on development envi or nah
    ==============================
    */
    //detect envi
    var c = new log_1.LogInput(developEnvi);
    //detect language
    var lang = new language_1.Language();
    var l = lang.which();
    //detect country
    var country = new country_1.Country();
    var co = country.which();
    //detect if cookie has gender entity
    var cookie = new cookie_1.Cookie();
    var variationPLPCheck = cookie.check('_GSMARS_PLP2');
    //detect media query: if mobile or not
    var media = new mediaQuery_1.CheckMobileOrDesktop('768px');
    var mediaQuery = media.match();
    /*
    ==============================
    BEGIN CUSTOM CODE | DYNAMIC
    ==============================
    */
    var parentContainerA = document.getElementsByClassName('productListerTeaser-price');
    var Exchange = /** @class */ (function () {
        function Exchange(_elmParent, _priceNow, _priceOrigin) {
            // code...
            this.elmParent = _elmParent;
            this.priceNow = _priceNow;
            this.priceOrigin = _priceOrigin;
            this.intervalCheck;
            this.oldHash = window.location.search;
        }
        Exchange.prototype.searchHandler = function (obj) {
            var target = this.oldHash;
            var detect = function () {
                if (target != window.location.search) {
                    setTimeout(function () {
                        obj.check();
                    }, 500);
                    target = window.location.search;
                }
                else {
                }
            };
            this.intervalCheck = setInterval(function () { detect(); }, 700);
        };
        return Exchange;
    }());
    var PLP_A = /** @class */ (function (_super) {
        __extends(PLP_A, _super);
        function PLP_A(_elmParent, _priceNow, _priceOrigin) {
            // code...
            return _super.call(this, _elmParent, _priceNow, _priceOrigin) || this;
        }
        PLP_A.prototype.check = function () {
            var target = this.elmParent;
            var that = this;
            setTimeout(function () {
                for (var i = 0; i < target.length; i++) {
                    var priceOrigin = target[i].getElementsByClassName(that.priceOrigin);
                    var priceNow = target[i].getElementsByClassName(that.priceNow);
                    priceNow[0].style.fontSize = '15px';
                    target[i].insertBefore(priceOrigin[0], target[i].childNodes[0]);
                }
            }, 1000);
        };
        return PLP_A;
    }(Exchange));
    var varA = new PLP_A(parentContainerA, 'productPrice', 'productPrice--discountedOriginal');
    varA.check();
    varA.searchHandler(varA);
    /*
    ==============================
    END CUSTOM CODE
    ==============================
    */
}
exports.customCodeInit = customCodeInit;
