

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
    testId:  'GTM_daisycon',
    urlOrigin: 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.47.0.14878'
  }
  return envi;
}

export function customCodeInit (developEnvi:boolean):void {
 
  /*
  ==============================
  BEGIN CUSTOM CODE | DYNAMIC
  ==============================
  */

  //this is a test

/*  class daisycon extends Utility {
    regxp: RegExp;
    search: string;
    found:Array<string>;
    data:boolean | string;

    constructor(developEnvi:any) {
      // code...
      super(developEnvi);
      this.regxp = /(daisycon)/g;
      this.search = document.location.search;
      this.found = this.search.match(this.regxp);
      this.data = JSON.parse(sessionStorage.getItem('daisycon')) ? sessionStorage.getItem('daisycon') : false;

    }
    pushData() {
      if(this.data) {
        this.log('from daisycon: push data Layer');
        return;
      }else if(this.found[0] == 'daisycon') {
        let exist:boolean = true;
        this.log(exist);
        sessionStorage.setItem('daisycon', JSON.stringify(exist));

        this.log('from daisycon: Set it');
        this.log('from daisycon: push data Layer');
        return;
      }
    }
  }

  let theyComeFromDaisycon = new daisycon(developEnvi);
  theyComeFromDaisycon.pushData();*/



  function find_Elm(target:string) {
    return new Promise(function(resolve) {
      let customInterval = setInterval(function() {
        let target_elm:NodeList = document.querySelectorAll(target);
        if(target_elm.length > 0) {
          resolve(target_elm);
          clearInterval(customInterval);
        }
      },100);
    });
  }

  find_Elm('.reza-custom-master').then(function(result:NodeList) {
    console.log(result[0]);
  });

  function delay(ms:any) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(`delayed ${ms}`);
      }, ms)
    });
  }

  delay(6000).then(function(result) {
    console.log('runs after ' + result);
    console.log('appended');
    document.getElementsByClassName('btn--orange')[0].classList.add('reza-custom-master');

  });


  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}