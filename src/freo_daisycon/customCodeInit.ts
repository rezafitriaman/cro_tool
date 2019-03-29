
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
import {customStyle} from "./customStyle"
import {appendJsOrigin} from "./appendJsOrigin"

/*
==============================
INIT DATA | STATIC
needed for each project
==============================
*/

/*export function data():Object {
  const envi:Object = {
    develop: true,
    testId:  'freo_daisycon',
    urlOrigin: 'https://www.freo.nl//Scripts\/FreoWebsite\/polyfills.js\?v=\d+.\d+.\d.\d+/g'
  }
  return envi;
}*/

export class CustomBase extends Utility {
  envi:any;
  customStyle: any;
  message: any;
  constructor(developEnvi:boolean = true) {
    console.log('cc ' + developEnvi)
    // code...
    super(developEnvi);
    this.envi = {
      develop: developEnvi,
      testId:  'freo_daisycon',
      urlOrigin: 'https://www.freo.nl//Scripts\/FreoWebsite\/polyfills.js\?v=\d+.\d+.\d.\d+/g'
    }
    this.appendJsOrigin(this.envi.testId, this.envi.urlOrigin);
    this.customStyle = () => {
      var style = `
        <style id="t4u-custom-style">
        
        </style>`;
      document.querySelectorAll('head')[0].insertAdjacentHTML('afterbegin', style);
    }
  }
}


class var1 extends CustomBase {
  message: any;
  constructor(developEnvi:boolean = true) {
    // code...
    super(developEnvi);
    console.log('aa ' + developEnvi);
    this.log('reza');
    this.appendMassage();
  }
}

let initVar1 = new var1(false);



/*let customVariant = new CustomBase(true);
console.log(customVariant)*/


/*export function customCodeInit (developEnvi:boolean):void {
 */
  /*
  ==============================
  BEGIN CUSTOM CODE | DYNAMIC
  ==============================
  */

 /* class CustomBase extends Utility {

    constructor(developEnvi:any) {
      // code...
      super(developEnvi);
    }
  }

  let customVariant = new CustomBase(developEnvi);*/

  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
/*}*/