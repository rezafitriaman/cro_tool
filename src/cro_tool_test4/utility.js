"use strict";
/*
==============================
IMPORT MODULE | STATIC
UTILITY what we have right now are:

- detect envi

- detect language

- detect country

- detect if cookie has gender entity

- detect media query: if mobile or not

- settimeout in a PROMISE so use .then(), resolve(), reject()

  example use:  delay(6000).then(function(result) {
                  console.log('runs after ' + result);
                  console.log('appended');
                  document.getElementsByClassName('btn--orange')[0].classList.add('reza-custom-master');

                });
- setInterval to find a specifiek element, in a Promise so use .then(), resolve(), reject()

  example use:  findElm('.xxx-xxx-master').then(function(result) {
                  console.log(result);
                });

==============================
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
//@FindTargetFirst
function FindTargetFirst(target, propertyKey, descriptor) {
    var customInterval;
    var originalMethod = descriptor.value;
    // rewrite the function
    descriptor.value = function () {
        var context = this;
        var args = arguments;
        return new Promise(function (resolve) {
            customInterval = setInterval(function () {
                var target_elm = document.querySelectorAll(args[0]);
                if (target_elm.length > 0) {
                    resolve(target_elm);
                    clearInterval(customInterval);
                }
            }, 100);
        }).then(function (result) {
            context.log('find it');
            context.log(result);
            originalMethod.apply(context, args);
        });
    };
    return descriptor;
}
exports.FindTargetFirst = FindTargetFirst;
;
//@Debounce(200)
function Debounce(wait) {
    return function (target, propertyKey, descriptor) {
        var timeout;
        //function foo/ target
        var originalMethod = descriptor.value;
        // rewhrite the function
        descriptor.value = function () {
            var context = this;
            var args = arguments;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve("delayed " + wait);
                }, wait);
            }).then(function (result) {
                context.log('runs after ' + result);
                originalMethod.apply(context, args);
            });
        };
        return descriptor;
    };
}
exports.Debounce = Debounce;
;
function Module(obj) {
    return function (target) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super.call(this, obj.develop) || this;
                _this.style = obj.style;
                _this.testId = obj.testId;
                _this.urlReplaced = obj.urlReplaced;
                _this.head_elm = document.querySelectorAll('head')[0];
                _this.appendMassage(_this.testId);
                _this.appendJsOrigin(_this.testId, _this.urlReplaced);
                _this.url = window.location.href;
                _this.appendStyle();
                return _this;
            }
            class_1.prototype.appendStyle = function () {
                this.head_elm.insertAdjacentHTML('afterbegin', this.style);
            };
            class_1.prototype.log = function (input) {
                if (obj.develop) {
                    console.log("%ccustom-log = ", 'color: green', input);
                }
                else {
                    return;
                }
            };
            class_1.prototype.match = function (maxWidth) {
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
            class_1.prototype.language = function () {
                var srclanguage = /(\w\w_)/g;
                var language = this.url.match(srclanguage);
                return language;
            };
            class_1.prototype.country = function () {
                var srcCountry = /(_\w\w)/g;
                var country = this.url.match(srcCountry);
                return country;
            };
            class_1.prototype.cookieCheck = function (name) {
                var value = "; " + document.cookie;
                var parts = value.split("; " + name + "=");
                if (parts.length == 2)
                    return parts.pop().split(";").shift();
                else
                    return null;
            };
            class_1.prototype.delay = function (ms) {
                return new Promise(function (resolve) {
                    setTimeout(function () {
                        resolve("delayed " + ms);
                    }, ms);
                });
            };
            class_1.prototype.appendJsOrigin = function (testId, urlReplaced) {
                if (obj.develop) {
                    // WHICH URL 
                    var rawUrl = urlReplaced;
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
            class_1.prototype.appendMassage = function (id) {
                if (obj.develop) {
                    console.log('%c<-----------DEV ENVI' + '-----------' + id + '----------->', "color: green; font-size:16px;");
                }
                else {
                    return;
                }
            };
            return class_1;
        }(target));
    };
}
exports.Module = Module;
