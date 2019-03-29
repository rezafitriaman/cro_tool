export function customCodeInit() {
let customCodeInit_str: string = `
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
    testId:  '0000',
    urlOrigin: 'origin_url_string'
  }
  return envi;
}

export function customCodeInit (developEnvi:boolean):void {
 
  /*
  ==============================
  BEGIN CUSTOM CODE | DYNAMIC
  ==============================
  */

  class CustomBase extends Utility {

    constructor(developEnvi:any) {
      // code...
      super(developEnvi);
    }
  }

  let customVariant = new CustomBase(developEnvi);

  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}`;

return customCodeInit_str;
}