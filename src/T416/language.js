"use strict";
/*
==============================
LANGUAGE
look which language G-star has
==============================
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
        return language[0];
    };
    return Language;
}());
exports.Language = Language;
