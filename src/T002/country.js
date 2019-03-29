"use strict";
/*
==============================
COUNTRY
look which COUNTRY G-star has
==============================

example how to use:

let country = new Country();
let co = country.which();
c.log(co)
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Country = /** @class */ (function () {
    function Country() {
        var url = window.location.href;
        this.regex = /(_\w\w)/g;
        this.url = url;
    }
    Country.prototype.which = function () {
        var language = this.url.match(this.regex);
        return language[0];
    };
    return Country;
}());
exports.Country = Country;
