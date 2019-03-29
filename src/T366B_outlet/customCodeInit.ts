

/*
==============================
IMPORT MODULE | STATIC
its needed for eatch project
==============================
*/

import {LogInput} from "./log"
import {Language} from "./language"
import {Country} from "./country"
import {Cookie} from "./cookie"
import {CheckMobileOrDesktop} from "./mediaQuery"

/*
==============================
INIT DATA | STATIC
needed for each project
==============================
*/

export function data():Object {
  const envi:Object = {
    develop: false,
    testId:  'T366B_outlet',
    urlOrigin: 'https://www.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
  }
  return envi;
}

export function customCodeInit (developEnvi:boolean):void {
  /*
  ==============================
  INIT CUSTOM LOG, language, country | STATIC
  so we can make a switch(on/of) if we on development envi or nah
  ==============================
  */

  //detect envi
  let c = new LogInput(developEnvi);

  //detect language
  let lang = new Language();
  let l = lang.which();

  //detect country
  let country = new Country();
  let co = country.which(); 

  //detect if cookie has gender entity
  let cookie  = new Cookie();
  let variationPLPCheck =  cookie.check('_GSMARS_PLP2')

  //detect media query: if mobile or not
  let media = new CheckMobileOrDesktop('768px');
  let mediaQuery = media.match();

  /*
  ==============================
  BEGIN CUSTOM CODE | DYNAMIC
  ==============================
  */
  let parentContainerA: HTMLCollection = document.getElementsByClassName('productListerTeaser-price');

  class Exchange {
    elmParent: HTMLCollection;
    priceNow: string;
    priceOrigin: string;

    intervalCheck: any;
    oldHash:any;
    constructor(_elmParent: HTMLCollection, _priceNow: string, _priceOrigin: string) {
      // code...
      this.elmParent = _elmParent;
      this.priceNow = _priceNow;
      this.priceOrigin = _priceOrigin;
      this.intervalCheck;
      this.oldHash = window.location.search
    }

    searchHandler(obj: any) {
  
      let target = this.oldHash;

      let detect = function(){

        if(target!=window.location.search){

            setTimeout(function(){
              obj.check();

           }, 500);
            target = window.location.search;

        }else {

        }
      };

      this.intervalCheck = setInterval(function(){ detect() }, 700);
    }
  }

  class PLP_A extends Exchange {
    variationPLP: string;

    constructor(_elmParent: HTMLCollection, _priceNow: string, _priceOrigin: string) {
      // code...
      super( _elmParent, _priceNow, _priceOrigin);
    }
    check() {

      let target = this.elmParent;
      let that = this;
      setTimeout(function() {

        for (var i = 0; i < target.length; i++) {

          let priceOrigin:HTMLCollection = target[i].getElementsByClassName(that.priceOrigin);
          let priceNow:HTMLCollection = target[i].getElementsByClassName(that.priceNow);

          (<HTMLElement>priceNow[0]).style.fontSize = '15px';
          target[i].insertBefore(priceOrigin[0], target[i].childNodes[0]);
        }
      }, 1000);
    }
  }

  let varA = new PLP_A(parentContainerA, 'productPrice', 'productPrice--discountedOriginal');
  varA.check();
  varA.searchHandler(varA);
  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}