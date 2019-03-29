"use strict";
/*
==============================
CUSTOMSTYLE
==============================
*/
Object.defineProperty(exports, "__esModule", { value: true });
function customStyle() {
    var style = "\n\t\t<style id=\"t4u-custom-style\">\n\t\t\t.t4u-custom {\n\t\t\t\t-webkit-order: 0!important;\n\t\t\t    -ms-flex-order: 0!important;\n\t\t\t    order: 0!important;\n\t\t\t}\n\t\t</style>";
    document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
}
exports.customStyle = customStyle;
