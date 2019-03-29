/*
==============================
IMPORT STATIC MODULE
its needed for eatch project
==============================
*/

import {LogInput} from "./log"
import {Language} from "./language"

export function customCodeInit(developEnvi: boolean):void {
  /*
  ==============================
  INIT CUSTOM LOG!! STATIC
  so we can make a switch(on/of) if we on development envi or nah
  ==============================
  */

  let c = new LogInput(developEnvi);

  /*
  ==============================
  BEGIN CUSTOM CODE
  ==============================
  */

  let targetContainer_elm: HTMLCollection = document.getElementsByClassName('checkoutAccount-section-inner');
  let targetTile_elm: Element = targetContainer_elm[0].getElementsByClassName('loginForm-col--first')[0]; 
  let lang = new Language();
  let l = lang.which(); 
  c.log(l)

  let textObject: any = {
    'nl_' : 'Doorgaan als gast',
    'en_' : 'Guest checkout',
    'fr_' : 'Continuer en tant qu\'invité',
    'de_' : 'Weiter als Gast'
  }
  c.log(textObject);

  (<HTMLElement>targetTile_elm).classList.add("t4u-custom");
  targetTile_elm.getElementsByClassName('section-title')[0].innerHTML = textObject[l];

  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}