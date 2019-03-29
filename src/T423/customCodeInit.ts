
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
    testId:  'T423',
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
  let gender =  cookie.check('gender')

  /*
  ==============================
  BEGIN CUSTOM CODE | DYNAMIC
  ==============================
  */

  class Color {
    elm: HTMLCollection
    constructor(target: HTMLCollection) {
      // code...
      this.elm = target
    }
    change(color:string, mouseoverColor:string) {
      for (var i = 0; i < this.elm.length; i++) {
        (<HTMLElement>this.elm[i]).style.backgroundColor = color;
        (<HTMLElement>this.elm[i]).style.borderColor = color;
        (<HTMLElement>this.elm[i]).addEventListener('mouseover', function() {
          this.style.backgroundColor = mouseoverColor;
        });
        (<HTMLElement>this.elm[i]).addEventListener('mouseout', function() {
          this.style.backgroundColor = color
        });
      }
    }
  }

  let winkelWagenButton = new Color(document.getElementsByClassName('productDetail-addToBagLink'));

  winkelWagenButton.change('#173a79', 'transparent');
  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}