
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

import {Utility} from "./utility"

/*
==============================
INIT DATA | STATIC
needed for each project
==============================
*/

export function data():Object {
  const envi:Object = {
    develop: true,
    testId:  'advance_js',
    urlOrigin: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
  }
  return envi;
}

 export function logClass(target: Function) {
    // save a reference to the original constructor
    const original = target;

    // a utility function to generate instances of a class
    function construct(constructor:any, args:any) {
        const c: any = function () {
            return constructor.apply(this, args);
        }
        c.prototype = constructor.prototype;
        return new c();
    }

    // the new constructor behaviour
    const f: any = function (...args) {
        console.log(`New: ${original['name']} is created`);
        return construct(original, args);
    }

    // copy prototype so intanceof operator still works
    f.prototype = original.prototype;

    // return new constructor (will override original)
    return f;
}

export function customCodeInit (developEnvi:boolean):void {
 
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


@logClass
class Employee {

}

let emp = new Employee();
console.log('emp instanceof Employee');
console.log(emp instanceof Employee);


  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}