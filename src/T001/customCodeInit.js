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
    /*
    ==============================
    BEGIN CUSTOM CODE | DYNAMIC
    ==============================
    */
    var target = document.querySelectorAll('.productListerTeaser-price');
    for (var i = 0; i < target.length; i++) {
        var productPrice = target[i].querySelector('.productPrice');
        target[i].appendChild(productPrice);
    }
    /*
    ==============================
    END CUSTOM CODE
    ==============================
    */
}
exports.customCodeInit = customCodeInit;
