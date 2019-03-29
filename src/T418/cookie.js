"use strict";
/*
==============================
CUSTOM COOKIE CHECK
==============================
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Cookie = /** @class */ (function () {
    function Cookie(option) {
        // code...
        this.option = option;
    }
    Cookie.prototype.check = function (name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2)
            return parts.pop().split(";").shift();
        else
            return null;
    };
    return Cookie;
}());
exports.Cookie = Cookie;
