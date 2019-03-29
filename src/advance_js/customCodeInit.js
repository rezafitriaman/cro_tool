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

  example use:  find_Elm('.reza-custom-master').then(function(result) {
                  console.log(result);
                });

==============================
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
==============================
INIT DATA | STATIC
needed for each project
==============================
*/
function data() {
    var envi = {
        develop: true,
        testId: 'advance_js',
        urlOrigin: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
    };
    return envi;
}
exports.data = data;
function logClass(target) {
    // save a reference to the original constructor
    var original = target;
    // a utility function to generate instances of a class
    function construct(constructor, args) {
        var c = function () {
            return constructor.apply(this, args);
        };
        c.prototype = constructor.prototype;
        return new c();
    }
    // the new constructor behaviour
    var f = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("New: " + original['name'] + " is created");
        return construct(original, args);
    };
    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;
    // return new constructor (will override original)
    return f;
}
exports.logClass = logClass;
function customCodeInit(developEnvi) {
    /*
    ==============================
    BEGIN CUSTOM CODE | DYNAMIC
    ==============================
    */
    /*  class CustomBase extends Utility {
        develop:boolean;
        constructor(developEnvi:any) {
          // code...
          super(developEnvi);
          this.develop = true;
          console.log(developEnvi);
        }
      }
    
      let customVariant = new CustomBase(developEnvi);*/
    var Employee = /** @class */ (function () {
        function Employee() {
        }
        Employee = __decorate([
            logClass
        ], Employee);
        return Employee;
    }());
    var emp = new Employee();
    console.log('emp instanceof Employee');
    console.log(emp instanceof Employee);
    /*
    ==============================
    END CUSTOM CODE
    ==============================
    */
}
exports.customCodeInit = customCodeInit;
