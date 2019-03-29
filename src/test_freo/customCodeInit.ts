
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
    develop: true,
    testId:  'test_freo',
    urlOrigin: 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.47.0.20752'
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
  let cookie = new Cookie();
  let gender =  cookie.check('gender');
  /*
  ==============================
  BEGIN CUSTOM CODE | DYNAMIC
  ==============================
  */
  console.log('freo')


  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}