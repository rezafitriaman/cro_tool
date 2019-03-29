
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
import {appendJsOrigin} from "./appendJsOrigin"

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
      testId:  'freo_daisycon',
      urlOrigin: 'https://www.freo.nl/Scripts\/FreoWebsite\/polyfills.js\?v=\d+.\d+.\d.\d+/g'
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

class daisycon extends CustomBase {
  regxp: RegExp;
  search: string;
  found:Array<string>;
  data:boolean | string;
  constructor(developEnvi:boolean = true) {
    // code...
    super(developEnvi);
    this.regxp = /(daisycon)/g;
    this.search = document.location.search;
    this.found = this.search.match(this.regxp);
    this.data = JSON.parse(sessionStorage.getItem('daisycon')) ? sessionStorage.getItem('daisycon') : false;
  }
  pushData() {

    if(this.search.length == 0 && this.data == false) {
      this.log('not daisyaaa');

    }else if(this.search.length > 0) {
      if(this.data) {
        this.log('from daisycon: push data Layer');
        dataLayer = [{
        'name': 'daisycon'
      }];


      }else {
        console.log('daisy');

        let exist:boolean = true;
        this.log(exist);
        sessionStorage.setItem('daisycon', JSON.stringify(exist));

        this.log('from daisycon: Set it');
        this.log('from daisycon: push data Layer');
        dataLayer = [{
          'name': 'daisycon'
        }];

      }
    }else {
      dataLayer = [{
        'name': 'daisycon'
      }];

      this.log('daisy go to other page');
    }
  }
}


let theyComeFromDaisycon = new daisycon(false);
theyComeFromDaisycon.pushData();

/*
==============================
END CUSTOM CODE
==============================
*/