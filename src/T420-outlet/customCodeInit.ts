
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

/*
==============================
INIT DATA | STATIC
needed for each project
==============================
*/

export function data():Object {
  const envi:Object = {
    develop: false,
    testId:  'T420-outlet',
    urlOrigin: 'https://outlet.g-star.com/_ui/g-star/js/vendor/polyfill/picturefill-3.0.2.min.js'
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
  let varPage =  cookie.check('_GSMARS_PLP2')

  /*
  ==============================
  BEGIN CUSTOM CODE | DYNAMIC
  ==============================
  */
  //T420 - [PLP] removing color name (+outlet)
  class RemoveColorName {
    elm:HTMLCollection;
    constructor(target:HTMLCollection) {
      // code...
      this.elm = target;
    }
    remove() {

        for (var i = 0; i < this.elm.length; i++) {
          (<HTMLElement>this.elm[i]).style.display = 'none';
        }; 

    }
    urlHasChanged() {
      let curentULR = window.location.href;
      let detect = () => {
        if(curentULR!=window.location.href){
          this.remove();
          curentULR = window.location.href;
        }
      }

      let myInterval = setInterval(function(){ detect() }, 100);

      setTimeout(function(){ clearInterval(myInterval); }, 300000);
      
   }
  }

  let colorText = new RemoveColorName(document.getElementsByClassName('productListerTeaser-color'));

    colorText.remove();
    colorText.urlHasChanged();

  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}