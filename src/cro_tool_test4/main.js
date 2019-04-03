"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = require("./utility");
/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/
var V1 = /** @class */ (function () {
    function V1() {
        // code...
    }
    V1.prototype.cunstomCode = function (target) {
        document.querySelectorAll(target)[0].innerHTML = 'hello master Marthijn sddfd';
    };
    __decorate([
        utility_1.Debounce(7000)
    ], V1.prototype, "cunstomCode", null);
    V1 = __decorate([
        utility_1.Module({
            develop: true,
            style: "<style id=\"t4u-custom-style\"></style>",
            testId: 'cro_tool_test4',
            urlReplaced: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
        })
    ], V1);
    return V1;
}());
/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/
var variationOne = new V1();
variationOne.cunstomCode('.jeans-fitguide__header-title-main');
/*
==============================
END CUSTOM CODE
==============================
*/ 
