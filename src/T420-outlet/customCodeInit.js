"use strict";
/*
==============================
IMPORT MODULE | STATIC
its needed for eatch project
==============================
*/
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("./log");
var language_1 = require("./language");
var country_1 = require("./country");
var cookie_1 = require("./cookie");
/*
==============================
INIT DATA | STATIC
needed for each project
==============================
*/
function data() {
    var envi = {
        develop: false,
        testId: 'T420-outlet',
        urlOrigin: 'https://outlet.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
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
    var varPage = cookie.check('_GSMARS_PLP2');
    /*
    ==============================
    BEGIN CUSTOM CODE | DYNAMIC
    ==============================
    */
    //T420 - [PLP] removing color name (+outlet)
    var RemoveColorName = /** @class */ (function () {
        function RemoveColorName(target) {
            // code...
            this.elm = target;
        }
        RemoveColorName.prototype.remove = function () {
            for (var i = 0; i < this.elm.length; i++) {
                this.elm[i].style.display = 'none';
            }
            ;
        };
        RemoveColorName.prototype.urlHasChanged = function () {
            var _this = this;
            var curentULR = window.location.href;
            var detect = function () {
                if (curentULR != window.location.href) {
                    _this.remove();
                    curentULR = window.location.href;
                }
            };
            var myInterval = setInterval(function () { detect(); }, 100);
            setTimeout(function () { clearInterval(myInterval); }, 300000);
        };
        return RemoveColorName;
    }());
    var colorText = new RemoveColorName(document.getElementsByClassName('productListerTeaser-color'));
    colorText.remove();
    colorText.urlHasChanged();
    /*
    ==============================
    END CUSTOM CODE
    ==============================
    */
}
exports.customCodeInit = customCodeInit;
