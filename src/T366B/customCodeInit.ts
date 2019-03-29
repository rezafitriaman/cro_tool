

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
    develop: true,
    testId:  'T366B',
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
  c.log(variationPLPCheck)
  let parentContainerA: HTMLCollection = document.getElementsByClassName('productListerTeaser-price');
  let parentContainerB_C: HTMLCollection = document.getElementsByClassName('productTile-price');

  let styleVariantB_C: HTMLCollection = document.getElementsByClassName('productTile--style-variants');

  class Exchange {
    elmParent: HTMLCollection;
    priceNow: string;
    priceOrigin: string;

    intervalCheck: Object;
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
      c.log(obj.variationPLP)
  
      let target = this.oldHash;
      let detect = function(){

        if(target!=window.location.search){
            if(obj.variationPLP == 'A' || obj.variationPLP == null) {
              setTimeout(function(){ obj.check(variationPLPCheck); }, 300);
            }else {
              obj.check(variationPLPCheck);
              obj.color('red');
              obj.hasFilter();
            }

            target = window.location.search;
        }
      };

      this.intervalCheck = setInterval(function(){ detect() }, 100);
    }
  }

  class PLP_A extends Exchange {
    variationPLP: string;

    constructor(_variationPLP: string, _elmParent: HTMLCollection, _priceNow: string, _priceOrigin: string) {
      // code...
      super( _elmParent, _priceNow, _priceOrigin);
      this.variationPLP = _variationPLP;
    }
    check(_variationPLPCheck:string) {
      if(_variationPLPCheck == this.variationPLP) {
        for (var i = 0; i < this.elmParent.length; i++) {

          let priceOrigin:HTMLCollection = this.elmParent[i].getElementsByClassName(this.priceOrigin);
          let priceNow:HTMLCollection = this.elmParent[i].getElementsByClassName(this.priceNow);

          (<HTMLElement>priceNow[0]).style.fontSize = '15px';
          this.elmParent[i].insertBefore(priceOrigin[0], this.elmParent[i].childNodes[0]);
        }
      }
    }
  }

  class PLP_B_C extends Exchange {
    variationPLP: string;

    constructor(_variationPLP: string, _elmParent: HTMLCollection, _priceNow: string, _priceOrigin: string) {
      // code...
      super( _elmParent, _priceNow, _priceOrigin);
      this.variationPLP = _variationPLP;
    }
    check(_variationPLPCheck:string) {
      if(_variationPLPCheck == this.variationPLP) {

        for (var i = 0; i < this.elmParent.length; i++) {

          let priceOrigin:HTMLCollection = this.elmParent[i].getElementsByClassName(this.priceOrigin);
          let priceNow:HTMLCollection = this.elmParent[i].getElementsByClassName(this.priceNow);

          (<HTMLElement>priceNow[0]).style.fontSize = '15px';
          this.elmParent[i].insertBefore(priceNow[0], this.elmParent[i].childNodes[0]);
        }

      }
    }
    color(_color:string) {
      for (var i = 0; i < this.elmParent.length; i++) {
        let priceNow:HTMLCollection = this.elmParent[i].getElementsByClassName(this.priceNow);
        (<HTMLElement>priceNow[0]).style.color = _color;
      }
    }
    hasFilter() {
      for (var i = 0; i < this.elmParent.length; i++) {
        let styleVariant = this.elmParent[i].closest('.productTile-info').getElementsByClassName('productTile__style-variants');
        if(styleVariant.length > 0) {
          let buttonsStyle = styleVariant[0].getElementsByTagName('button');
          for (var j = 0; j < buttonsStyle.length; j++) {
            buttonsStyle[j].addEventListener('mouseenter', function() {
              let target = this;
              setTimeout(function(){

              let elmParent:HTMLCollection = target.closest('.productTile-info').getElementsByClassName('productTile-info-container')[0].getElementsByClassName('productTile-price')
              let priceNow:HTMLCollection = target.closest('.productTile-info').getElementsByClassName('productTile-info-container')[0].getElementsByClassName('productTile-price')[0].getElementsByClassName('productPrice-value');
              
              elmParent[0].insertBefore(priceNow[0], elmParent[0].childNodes[0]); 

              (<HTMLElement>priceNow[0]).style.color = 'red';
              (<HTMLElement>priceNow[0]).style.fontSize = '15px';
              }, 50);
            });
          }
        }
      }
    }
  }

  let varA = new PLP_A('A', parentContainerA, 'productPrice', 'productPrice--discountedOriginal');
  varA.check(variationPLPCheck);

  varA.searchHandler(varA);

  let varB = new PLP_B_C('B', parentContainerB_C, 'productPrice-value', 'productPrice--fromPrice');
  varB.check(variationPLPCheck);
  varB.color('red');
  varB.hasFilter();

  varB.searchHandler(varB);

  let varC = new PLP_B_C('C', parentContainerB_C, 'productPrice-value', 'productPrice--fromPrice');
  varC.check(variationPLPCheck);
  varC.color('red');
  varC.hasFilter();

  varC.searchHandler(varC);

  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */

}

