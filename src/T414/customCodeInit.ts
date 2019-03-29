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
  let target: NodeList = document.querySelectorAll('.slideCarousel--crossSelling');
  let targetcheckout: NodeList = document.querySelectorAll('.js-slideCarousel--cartRecommendations');

  let hideRecomendation = (target:NodeList):void => {
    if(target.length > 0) {
      c.log('true');
      (<Element>target[0]).classList.add('t4u-custom');
    }
  }

  hideRecomendation(targetcheckout);

  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}