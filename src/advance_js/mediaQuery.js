"use strict";
/*
==============================
CHECK MOBILE OR DESKTOP
look which MEDIA WEBSITE has
==============================

example how to use:

let mobile = new CheckMobileOrDesktop('768px');
let ismobile = mobile.match();
c.log(ismobile);
*/
Object.defineProperty(exports, "__esModule", { value: true });
var CheckMobileOrDesktop = /** @class */ (function () {
    function CheckMobileOrDesktop(maxWidth) {
        this.maxWidth = window.matchMedia("(max-width:" + maxWidth + ")");
    }
    CheckMobileOrDesktop.prototype.match = function () {
        var media;
        if (this.maxWidth.matches) { // If media query matches
            media = 'mobile';
        }
        else {
            media = 'desktop or tablet';
        }
        return media;
    };
    return CheckMobileOrDesktop;
}());
exports.CheckMobileOrDesktop = CheckMobileOrDesktop;
