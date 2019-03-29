/*
==============================
IMPORT MODULE | STATIC
its needed for eatch project
==============================
*/

import {LogInput} from "./log"
import {Language} from "./language"
import {Country} from "./country"

export function customCodeInit(developEnvi: boolean):void {
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

  /*
  ==============================
  BEGIN CUSTOM CODE | DYNAMIC
  ==============================
  */

  let target:NodeList = document.querySelectorAll('.productListerTeaser-price');

  for (var i = 0; i < target.length; i++) {
    let productPrice = (<HTMLElement>target[i]).querySelector('.productPrice');
    (<HTMLElement>target[i]).appendChild(productPrice);
  }

  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}