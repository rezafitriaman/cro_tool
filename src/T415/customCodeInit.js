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
    var phone_elm = document.querySelector("#notice-phone");
    var target = phone_elm.querySelector('.formInputLabel');
    c.log(co);
    c.log(l);
    var x = {
        '_nl': "+31",
        '_be': "+32",
        '_us': "+1",
        '_de': "+49",
        '_fr': "+33",
        '_ca': "+1",
        '_au': "+61",
        '_gb': "+44",
        '_dk': "+45",
        '_es': "+34"
    };
    var languageObj = {
        'en_': "Please make sure you include country code " + x[co] + ".",
        'de_': "Bitte l\u00E4ndervorwahl " + x[co] + " mit angeben.",
        'fr_': "Merci d\u2019ajouter votre indicatif pays " + x[co] + ".",
        'es_': "Por favor incluya el prefijo del pa\u00EDs " + x[co],
        'nl_': "Voeg ook landcode " + x[co] + " toe."
    };
    var htmlString = "\n     <span class=\"formInputLabel t4u-custom\">" + languageObj[l] + "</span>";
    c.log(languageObj[l]);
    target.insertAdjacentHTML('afterend', htmlString);
    /*
    ==============================
    END CUSTOM CODE
    ==============================
    */
}
exports.customCodeInit = customCodeInit;
