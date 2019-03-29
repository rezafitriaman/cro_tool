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
        develop: true,
        testId: 'T366B',
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
    c.log(variationPLPCheck);
    var parentContainerA = document.getElementsByClassName('productListerTeaser-price');
    var parentContainerB_C = document.getElementsByClassName('productTile-price');
    var styleVariantB_C = document.getElementsByClassName('productTile--style-variants');
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
            c.log(obj.variationPLP);
            var target = this.oldHash;
            var detect = function () {
                if (target != window.location.search) {
                    if (obj.variationPLP == 'A' || obj.variationPLP == null) {
                        setTimeout(function () { obj.check(variationPLPCheck); }, 300);
                    }
                    else {
                        obj.check(variationPLPCheck);
                        obj.color('red');
                        obj.hasFilter();
                    }
                    target = window.location.search;
                }
            };
            this.intervalCheck = setInterval(function () { detect(); }, 100);
        };
        return Exchange;
    }());
    var PLP_A = /** @class */ (function (_super) {
        __extends(PLP_A, _super);
        function PLP_A(_variationPLP, _elmParent, _priceNow, _priceOrigin) {
            var _this = 
            // code...
            _super.call(this, _elmParent, _priceNow, _priceOrigin) || this;
            _this.variationPLP = _variationPLP;
            return _this;
        }
        PLP_A.prototype.check = function (_variationPLPCheck) {
            if (_variationPLPCheck == this.variationPLP) {
                for (var i = 0; i < this.elmParent.length; i++) {
                    var priceOrigin = this.elmParent[i].getElementsByClassName(this.priceOrigin);
                    var priceNow = this.elmParent[i].getElementsByClassName(this.priceNow);
                    priceNow[0].style.fontSize = '15px';
                    this.elmParent[i].insertBefore(priceOrigin[0], this.elmParent[i].childNodes[0]);
                }
            }
        };
        return PLP_A;
    }(Exchange));
    var PLP_B_C = /** @class */ (function (_super) {
        __extends(PLP_B_C, _super);
        function PLP_B_C(_variationPLP, _elmParent, _priceNow, _priceOrigin) {
            var _this = 
            // code...
            _super.call(this, _elmParent, _priceNow, _priceOrigin) || this;
            _this.variationPLP = _variationPLP;
            return _this;
        }
        PLP_B_C.prototype.check = function (_variationPLPCheck) {
            if (_variationPLPCheck == this.variationPLP) {
                for (var i = 0; i < this.elmParent.length; i++) {
                    var priceOrigin = this.elmParent[i].getElementsByClassName(this.priceOrigin);
                    var priceNow = this.elmParent[i].getElementsByClassName(this.priceNow);
                    priceNow[0].style.fontSize = '15px';
                    this.elmParent[i].insertBefore(priceNow[0], this.elmParent[i].childNodes[0]);
                }
            }
        };
        PLP_B_C.prototype.color = function (_color) {
            for (var i = 0; i < this.elmParent.length; i++) {
                var priceNow = this.elmParent[i].getElementsByClassName(this.priceNow);
                priceNow[0].style.color = _color;
            }
        };
        PLP_B_C.prototype.hasFilter = function () {
            for (var i = 0; i < this.elmParent.length; i++) {
                var styleVariant = this.elmParent[i].closest('.productTile-info').getElementsByClassName('productTile__style-variants');
                if (styleVariant.length > 0) {
                    var buttonsStyle = styleVariant[0].getElementsByTagName('button');
                    for (var j = 0; j < buttonsStyle.length; j++) {
                        buttonsStyle[j].addEventListener('mouseenter', function () {
                            var target = this;
                            setTimeout(function () {
                                var elmParent = target.closest('.productTile-info').getElementsByClassName('productTile-info-container')[0].getElementsByClassName('productTile-price');
                                var priceNow = target.closest('.productTile-info').getElementsByClassName('productTile-info-container')[0].getElementsByClassName('productTile-price')[0].getElementsByClassName('productPrice-value');
                                elmParent[0].insertBefore(priceNow[0], elmParent[0].childNodes[0]);
                                priceNow[0].style.color = 'red';
                                priceNow[0].style.fontSize = '15px';
                            }, 50);
                        });
                    }
                }
            }
        };
        return PLP_B_C;
    }(Exchange));
    var varA = new PLP_A('A', parentContainerA, 'productPrice', 'productPrice--discountedOriginal');
    varA.check(variationPLPCheck);
    varA.searchHandler(varA);
    var varB = new PLP_B_C('B', parentContainerB_C, 'productPrice-value', 'productPrice--fromPrice');
    varB.check(variationPLPCheck);
    varB.color('red');
    varB.hasFilter();
    varB.searchHandler(varB);
    var varC = new PLP_B_C('C', parentContainerB_C, 'productPrice-value', 'productPrice--fromPrice');
    varC.check(variationPLPCheck);
    varC.color('red');
    varC.hasFilter();
    varC.searchHandler(varC);
    /*
    ==============================
    END CUSTOM CODE
    ==============================
    */
}
exports.customCodeInit = customCodeInit;
