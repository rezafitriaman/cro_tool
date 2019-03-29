"use strict";
/*
==============================
CUSTOMSTYLE
==============================
*/
Object.defineProperty(exports, "__esModule", { value: true });
function customStyle() {
    var style = "\n\t\t<style id=\"t4u-custom-style\">\n\t\t\t.custom-flex {\n\t\t\t    display: -webkit-box!important;\n\t\t\t    display: -ms-flexbox!important;\n\t\t\t    display: flex!important;\n    \t\t\t-webkit-box-align: end!important;\n    \t\t\t-ms-flex-align: end!important;\n    \t\t\talign-items: flex-end!important;\n    \t\t\tpadding-left: 0px!important;\n\t\t\t}\n\t\t\t.t4u-custom-container .checkoutAccount-paymentMethods {\n\t\t\t\tborder-top: unset!important;\n\t\t\t\tmargin: 0px!important;\t\t\t\n\t\t\t}\n\t\t\t.t4u-custom-container .checkoutAccount-paymentMethods .checkoutAccount-paymentMethods-list {\n\t\t\t\tborder-bottom: unset!important;\n\t\t\t    margin-bottom: 0px!important;\t\t\n\t\t\t}\n\t\t\t.t4u-custom-container .checkoutAccount-paymentMethods-item {\n\t\t\t\tmargin: 0 8px!important;\n\t\t\t}\n\t\t\t.custom-white .checkoutAccount-paymentMethods {\n\t\t\t\tbackground-color: white!important;\n\t\t\t}\n\t\t\t.t4u-custom-container-mobile .checkoutAccount-paymentMethods {\n\t\t\t\tdisplay: -webkit-box!important;\n\t\t\t    display: -ms-flexbox!important;\n\t\t\t    display: flex!important;\n\t\t\t    -webkit-box-pack: center!important;\n\t\t\t        -ms-flex-pack: center!important;\n\t\t\t            justify-content: center!important;\n\t\t\t    background-color: #f6f6f6!important;\n\t\t\t    border-top: unset!important;\n\t\t\t}\n\t\t\t.t4u-custom-container-mobile .checkoutAccount-paymentMethods .checkoutAccount-paymentMethods-item {\n\t\t\t\tmargin: 0 3px 12px;\n\t\t\t}\n\t\t\t.t4u-custom-container-mobile .checkoutAccount-paymentMethods-list {\n\t\t\t\tpadding-bottom: 0px!Important;\n\t\t\t}\n\t\t</style>";
    document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
}
exports.customStyle = customStyle;
