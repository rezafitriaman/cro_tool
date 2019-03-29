"use strict";
/*
==============================
IMPORT MODULE | STATIC
its needed for eatch project
==============================
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var log_1 = require("./log");
var language_1 = require("./language");
var country_1 = require("./country");
var cookie_1 = require("./cookie");
/*
==============================
INIT DATA | STATIC
needed for each project
==============================
*/
function data() {
    var envi = {
        develop: true,
        testId: 'decorators',
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
    /*
    ==============================
    BEGIN CUSTOM CODE | DYNAMIC
    ==============================
    */
    var httpEndpoints = {};
    var count = 1;
    function registerEndpointFactory(endpointPath) {
        console.log('one');
        return function registerEndpoint(constructor) {
            console.log('two');
            var test = new constructor();
            console.log(count);
            httpEndpoints['aaa' + count] = new constructor();
            count++;
        };
    }
    function protect(token) {
        return function (target, propertyKey, descriptor) {
            var originalFunction = descriptor.value;
            descriptor.value = function (request) {
                if (request.token !== token) {
                    throw new Error("forbiden!");
                }
                var bindedOriginalFunction = originalFunction.bind(this);
                var result = bindedOriginalFunction(request);
                return result;
            };
            return descriptor;
        };
    }
    var StarkMembers = /** @class */ (function () {
        function StarkMembers() {
            this.members = ["Robb", "Sansa", "Arya"];
        }
        StarkMembers.prototype.get = function () {
            return this.members;
        };
        StarkMembers.prototype.post = function (request) {
            this.members.push(request.body);
        };
        __decorate([
            protect("abc")
        ], StarkMembers.prototype, "post", null);
        StarkMembers = __decorate([
            registerEndpointFactory("/families/stark/members")
        ], StarkMembers);
        return StarkMembers;
    }());
    var Families = /** @class */ (function () {
        function Families() {
            this.houses = ["Lannister", "Targaryen"];
        }
        Families.prototype.get = function () {
            return this.houses;
        };
        Families.prototype.post = function (request) {
            this.houses.push(request.body);
        };
        Families = __decorate([
            registerEndpointFactory("/families")
        ], Families);
        return Families;
    }());
    var Castles = /** @class */ (function () {
        function Castles() {
            this.castles = ["Winterfell", "Casterly Rock"];
        }
        Castles.prototype.get = function () {
            return this.castles;
        };
        Castles.prototype.post = function (request) {
            this.castles.push(request.body);
        };
        Castles = __decorate([
            registerEndpointFactory("/castles")
        ], Castles);
        return Castles;
    }());
    console.log(httpEndpoints); // {"/families/stark/members": StarkMembers}
    /*httpEndpoints["/families/stark/members"].get() // ["Robb", "Sansa", "Arya"]*/
    /*httpEndpoints["/families"].post({token: "abc"}) // ["Lannister", "Targaryen"]*/
    /*httpEndpoints["/families"].post({}) */ // Uncaught Error: forbiden!
    /*
    ==============================
    END CUSTOM CODE
    ==============================
    */
}
exports.customCodeInit = customCodeInit;
