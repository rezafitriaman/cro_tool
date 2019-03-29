"use strict";
/*
==============================
IMPORT MODULE | STATIC
its needed for eatch project
==============================
*/
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("./log");
var language_1 = require("./language");
var country_1 = require("./country");
var cookie_1 = require("./cookie");
var mediaQuery_1 = require("./mediaQuery");
/*
==============================
INIT DATA | STATIC
needed for each project
==============================
*/
function data() {
    var envi = {
        develop: true,
        testId: 'T422',
        urlOrigin: 'https://www.g-star.com/_ui/g-star/js/app/base.d5555ab29c4c0978fa88c1b38e771983.js'
    };
    return envi;
}
exports.data = data;
function customCodeInit(developEnvi) {
    /*
    ==============================
    INIT CUSTOM LOG, language, country | STATIC
    so we can make a switch(on/of) if we on development envi or nah
    ==============================
    */
    //detect envi
    var c = new log_1.LogInput(developEnvi);
    //detect language
    var lang = new language_1.Language();
    var l = lang.which();
    //detect country
    var country = new country_1.Country();
    var co = country.which();
    //detect if cookie has gender entity
    var cookie = new cookie_1.Cookie();
    var gender = cookie.check('gender');
    //detect media query: if mobile or not
    var media = new mediaQuery_1.CheckMobileOrDesktop('768px');
    var mediaQuery = media.match();
    /*
    ==============================
    BEGIN CUSTOM CODE | DYNAMIC
    ==============================
    */
    var logos = document.getElementsByClassName('checkoutAccount-paymentMethods');
    var desktopTargetContainerShoppingBag = document.getElementsByClassName('checkoutShoppingCart-totalsColumn');
    var desktopTargetContainerWelcome = document.getElementsByClassName('loginForm-col');
    var desktopTargetContainerPersonalInfoAndAbove = document.getElementsByClassName('checkoutShoppingCart-small');
    var mobileTargetContainerPersonalInfoAndAbove = document.getElementsByClassName('checkoutAccount-header');
    var PaymentIcon = /** @class */ (function () {
        function PaymentIcon(logos, targetMedia, mediaQuery) {
            // code...
            this.logos = logos;
            this.mediaQuery = mediaQuery;
            this.targetMedia = targetMedia;
        }
        PaymentIcon.prototype.append = function (targetContainer, customClass) {
            var targetMedia = this.targetMedia;
            var mediaQuery = this.mediaQuery;
            var checkMobile = function (target) {
                if (targetMedia == 'mobile' && mediaQuery == 'mobile') { // If media query matches
                    c.log('mobile');
                    //mobile
                    if (targetContainer.length > 0) {
                        targetContainer[0].classList.add('t4u-custom-container-mobile');
                        targetContainer[0].insertBefore(target, targetContainer[0].childNodes[0]);
                    }
                }
                else if (targetMedia == 'desktop or tablet' && mediaQuery == 'desktop or tablet') {
                    c.log('desktop or tablet');
                    //desktop
                    if (targetContainer.length > 0) {
                        targetContainer[0].classList.add('t4u-custom-container');
                        targetContainer[0].appendChild(target);
                    }
                }
            };
            /*add custom class*/
            if (targetContainer.length > 0) {
                if (customClass == "custom-flex") {
                    targetContainer[0].classList.add(customClass);
                }
                else if (customClass == "custom-white") {
                    targetContainer[0].classList.add(customClass);
                }
                //only the last logo: often there where 2
                for (var i = 0; i < logos.length; i++) {
                    if (i == (logos.length - 1)) {
                        checkMobile(logos[i]); // Call listener function at run time
                    }
                }
            }
        };
        return PaymentIcon;
    }());
    var mobileAllPage = new PaymentIcon(logos, 'mobile', mediaQuery);
    mobileAllPage.append(mobileTargetContainerPersonalInfoAndAbove);
    var desktopShoppingBag = new PaymentIcon(logos, 'desktop or tablet', mediaQuery);
    desktopShoppingBag.append(desktopTargetContainerShoppingBag, 'custom-flex');
    var desktopWelcome = new PaymentIcon(logos, 'desktop or tablet', mediaQuery);
    desktopWelcome.append(desktopTargetContainerWelcome);
    var desktopPersonalInfo = new PaymentIcon(logos, 'desktop or tablet', mediaQuery);
    desktopPersonalInfo.append(desktopTargetContainerPersonalInfoAndAbove, 'custom-white');
    /*
    ==============================
    END CUSTOM CODE
    ==============================
    */
}
exports.customCodeInit = customCodeInit;
