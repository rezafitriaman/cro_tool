"use strict";
/*
==============================
IMPORT STATIC MODULE
its needed for eatch project
==============================
*/
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("./log");
var language_1 = require("./language");
function customCodeInit(developEnvi) {
    /*
    ==============================
    INIT CUSTOM LOG!! STATIC
    so we can make a switch(on/of) if we on development envi or nah
    ==============================
    */
    var c = new log_1.LogInput(developEnvi);
    /*
    ==============================
    BEGIN CUSTOM CODE
    ==============================
    */
    var targetContainer_elm = document.getElementsByClassName('checkoutAccount-section-inner');
    var targetTile_elm = targetContainer_elm[0].getElementsByClassName('loginForm-col--first')[0];
    var lang = new language_1.Language();
    var l = lang.which();
    c.log(l);
    var textObject = {
        'nl_': 'Doorgaan als gast',
        'en_': 'Guest checkout',
        'fr_': 'Continuer en tant qu\'invité',
        'de_': 'Weiter als Gast'
    };
    c.log(textObject);
    targetTile_elm.classList.add("t4u-custom");
    targetTile_elm.getElementsByClassName('section-title')[0].innerHTML = textObject[l];
    /*
    ==============================
    END CUSTOM CODE
    ==============================
    */
}
exports.customCodeInit = customCodeInit;
