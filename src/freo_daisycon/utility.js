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
    Utility.prototype.delay = function (ms) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve("delayed " + ms);
            }, ms);
        });
    };
    Utility.prototype.findElm = function (target) {
        return new Promise(function (resolve) {
            var customInterval = setInterval(function () {
                var target_elm = document.querySelectorAll(target);
                if (target_elm.length > 0) {
                    resolve(target_elm);
                    clearInterval(customInterval);
                }
            }, 100);
        });
    };
    Utility.prototype.appendJsOrigin = function (testId, urlOrigin) {
        if (this.developEnvi) {
            // WHICH URL 
            var rawUrl = urlOrigin;
            // CREATE SCRIPT TAG AND APPEND IT
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = rawUrl;
            script.id = 't4u-custom-script';
            //IF EXIST THEN REMOVE IT
            if (document.getElementById('t4u-custom-script')) {
                document.getElementById('t4u-custom-script').remove();
            }
            head.appendChild(script);
            //APPEND TEST ID
            document.getElementsByTagName('html')[0].classList.add(testId);
        }
        else {
            return;
        }
    };
    Utility.prototype.appendMassage = function (id) {
        if (this.developEnvi) {
            console.log('%c<-----------DEV ENVI' + '-----------' + id + '----------->', "color: green; font-size:16px;");
        }
        else {
            return;
        }
    };
    return Utility;
}());
exports.Utility = Utility;
