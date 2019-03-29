"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utility = /** @class */ (function () {
    function Utility(developEnvi) {
        // code...
        this.developEnvi = developEnvi;
        this.url = window.location.href;
    }
    Utility.prototype.log = function (input) {
        if (this.developEnvi) {
            console.log("%ccustom-log = ", 'color: green', input);
        }
        else {
            return;
        }
    };
    Utility.prototype.match = function (maxWidth) {
        var media;
        var width = window.matchMedia("(max-width:" + maxWidth + ")");
        if (width.matches) { // If media query matches
            media = 'mobile';
        }
        else {
            media = 'desktop or tablet';
        }
        return media;
    };
    Utility.prototype.language = function () {
        var srclanguage = /(\w\w_)/g;
        var language = this.url.match(srclanguage);
        return language;
    };
    Utility.prototype.country = function () {
        var srcCountry = /(_\w\w)/g;
        var country = this.url.match(srcCountry);
        return country;
    };
    Utility.prototype.cookieCheck = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
        else
            return null;
    };
    return Utility;
}());
exports.Utility = Utility;
