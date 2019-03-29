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
        develop: false,
        testId: 'T4_Cookie_wall',
        urlOrigin: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
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
    var cookieWall = /** @class */ (function () {
        function cookieWall(_targetDelete) {
            if (_targetDelete === void 0) { _targetDelete = '#dialogsContainer'; }
            // code...
            this.country = l[0] + co[0].split('_')[1];
            this.cookieHTML = "\n      <div class=\"custom-t4u-cookie cookieNoticeWrapper js-cookieNotice\">\n        <p class=\"cookieNotice\">\n            <span class=\"cookieNotice-message cookieNotice-message--info\">We use <a href=\"/" + this.country + "/cookie-statement\">cookies</a>.</span>\n            <span class=\"cookieNotice-message cookieNotice-message--warning\">Cookies are blocked or not supported by your browser. You must <a href=\"http://www.google.com/cookies.html\">enable cookies</a> to use this website.</span>\n            <a class=\"t4u-custom-x cookieNotice-closeButton js-cookieNotice-closeButton gstar-icon icon-close\"></a>\n        </p>\n      </div>";
            this.addClass = function () {
                document.getElementsByClassName('custom-t4u-cookie')[0].classList.add('has-cookiesEnabled');
                document.getElementsByClassName('custom-t4u-cookie')[0].classList.add('is-visible');
            };
            this.targetDelete = _targetDelete;
        }
        cookieWall.prototype.append = function (target) {
            var elm_target = document.getElementsByClassName(target)[0];
            //insert the small cookie
            elm_target.insertAdjacentHTML('afterend', this.cookieHTML);
            //emedietly delete the cookie wall with display none
            this.delete(this.targetDelete);
        };
        cookieWall.prototype.save = function () {
            var button = document.getElementsByClassName('t4u-custom-x');
            var showCookie = true;
            var showCookieData = sessionStorage.getItem('showCookie') ? JSON.parse(sessionStorage.getItem('showCookie')) : sessionStorage.setItem('showCookie', JSON.stringify(showCookie));
            if (showCookieData) {
                c.log('yes then append');
                this.addClass();
            }
            else if (showCookieData == false) {
                c.log('no then append nothing');
                return;
            }
            else {
                c.log('undefined then append cookie');
                this.addClass();
            }
            button[0].addEventListener('click', function () {
                showCookie = false;
                this.closest('.custom-t4u-cookie').classList.remove('is-visible');
                sessionStorage.setItem('showCookie', JSON.stringify(showCookie));
            });
        };
        cookieWall.prototype.delete = function (target) {
            var simulateClick = function (elem) {
                // Create our event (with options)
                var evt = new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                });
                // If cancelled, don't dispatch our event
                var canceled = !elem.dispatchEvent(evt);
            };
            var int = setInterval(function () {
                if (document.querySelector(target) != null) {
                    if (document.querySelector(target).getElementsByClassName('js-cookieAccept').length > 0) {
                        c.log(document.querySelector(target).getElementsByClassName('js-cookieAccept'));
                        clearInterval(int);
                        simulateClick(document.querySelector(target).getElementsByClassName('js-cookieAccept')[0]);
                    }
                }
            }, 300);
        };
        return cookieWall;
    }());
    var wall = new cookieWall();
    wall.append('footer');
    wall.save();
    /*
    ==============================
    END CUSTOM CODE
    ==============================
    */
}
exports.customCodeInit = customCodeInit;
