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
        testId: 'T423',
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
    var gender = cookie.check('gender');
    /*
    ==============================
    BEGIN CUSTOM CODE | DYNAMIC
    ==============================
    */
    var Color = /** @class */ (function () {
        function Color(target) {
            // code...
            this.elm = target;
        }
        Color.prototype.change = function (color, mouseoverColor) {
            for (var i = 0; i < this.elm.length; i++) {
                this.elm[i].style.backgroundColor = color;
                this.elm[i].style.borderColor = color;
                this.elm[i].addEventListener('mouseover', function () {
                    this.style.backgroundColor = mouseoverColor;
                });
                this.elm[i].addEventListener('mouseout', function () {
                    this.style.backgroundColor = color;
                });
            }
        };
        return Color;
    }());
    var winkelWagenButton = new Color(document.getElementsByClassName('productDetail-addToBagLink'));
    winkelWagenButton.change('#173a79', 'transparent');
    /*
    ==============================
    END CUSTOM CODE
    ==============================
    */
}
exports.customCodeInit = customCodeInit;
