

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

import {Utility} from "./utility"

/*
==============================
INIT DATA | STATIC
needed for each project
==============================
*/

export class CustomBase extends Utility {

  envi:any;
  customStyle: Function;
  message: Function;
  constructor(developEnvi:boolean = true) {
    // code...
    super(developEnvi);
    this.envi = {
      develop: developEnvi,
      testId:  'cro_tool_test',
      urlOrigin: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
    }
    this.appendJsOrigin(this.envi.testId, this.envi.urlOrigin);
    this.customStyle = () => {
      var style = `
        <style id="t4u-custom-style">
        
        </style>`;
      document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
    }
    this.appendMassage(this.envi.testId);
  }
}

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
==============================
*/

class V1 extends CustomBase {
  
  constructor(developEnvi:boolean = true) {
    // code...
    super(developEnvi)
  }
}

/*
==============================
VARIATION 1 | INIT

dont forget to set it to FALSE for production!!
==============================
*/

let variationOne = new V1();

/*
==============================
END CUSTOM CODE
==============================
*/