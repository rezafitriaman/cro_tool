"use strict";
/*
==============================
CUSTOMSTYLE
==============================
*/
Object.defineProperty(exports, "__esModule", { value: true });
function customStyle() {
    var style = "\n\t\t<style id=\"t4u-custom-style\">\n\t\t\t.t4u-custom-background {\n\t\t\t\tbackground-color: #ffa029!important;\n\t\t\t}\n\t\t\t.t4u-custom-numbers {\n\t\t\t\tcolor: #202020!important;\n\t\t\t}\n\t\t</style>";
    document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
}
exports.customStyle = customStyle;
