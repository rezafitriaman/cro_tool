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

  let phone_elm: HTMLElement =  document.querySelector("#notice-phone");
  let target : HTMLElement = phone_elm.querySelector('.formInputLabel');
  c.log(co)
  c.log(l)

  let x: any = {
    '_nl' : `+31`,
    '_be' : `+32`,
    '_us' : `+1`,
    '_de' : `+49`,
    '_fr' : `+33`,
    '_ca' : `+1`,
    '_au' : `+61`,
    '_gb' : `+44`,
    '_dk' : `+45`,
    '_es' : `+34`
  };

  let languageObj: any = {
    'en_' : `Please make sure you include country code ${x[co]}.`,
    'de_' : `Bitte ländervorwahl ${x[co]} mit angeben.`,
    'fr_' : `Merci d’ajouter votre indicatif pays ${x[co]}.`,
    'es_' : `Por favor incluya el prefijo del país ${x[co]}`,
    'nl_' : `Voeg ook landcode ${x[co]} toe.`
  };

  let htmlString:string = `
     <span class="formInputLabel t4u-custom">${languageObj[l]}</span>`;

  c.log(languageObj[l])

  target.insertAdjacentHTML('afterend', htmlString);

  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}