"use strict";
/*
==============================
LANGUAGE
look which LANGUAGE G-star has
==============================

example how to use:

let lang = new Language();
let l = lang.which();
c.log(l)
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Language = /** @class */ (function () {
    function Language() {
        var url = window.location.href;
        this.regex = /(\w\w_)/g;
        this.url = url;
    }
    Language.prototype.which = function () {
        var language = this.url.match(this.regex);
        return language;
    };
    return Language;
}());
exports.Language = Language;
