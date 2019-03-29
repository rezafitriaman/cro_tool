
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
    testId:  'T422',
    urlOrigin: 'https://www.g-star.com/_ui/g-star/js/app/base.d5555ab29c4c0978fa88c1b38e771983.js'
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

  //detect media query: if mobile or not
  let media = new CheckMobileOrDesktop('768px');
  let mediaQuery = media.match(); 

  /*
  ==============================
  BEGIN CUSTOM CODE | DYNAMIC
  ==============================
  */

  let logos: HTMLCollection = document.getElementsByClassName('checkoutAccount-paymentMethods');
  let desktopTargetContainerShoppingBag:HTMLCollection = document.getElementsByClassName('checkoutShoppingCart-totalsColumn');
  let desktopTargetContainerWelcome:HTMLCollection = document.getElementsByClassName('loginForm-col');
  let desktopTargetContainerPersonalInfoAndAbove:HTMLCollection = document.getElementsByClassName('checkoutShoppingCart-small');
  let mobileTargetContainerPersonalInfoAndAbove: HTMLCollection = document.getElementsByClassName('checkoutAccount-header');
 
  class PaymentIcon {
    logos: HTMLCollection;
    mediaQuery: String;
    targetMedia: String;

    constructor(logos:HTMLCollection, targetMedia:String, mediaQuery:String) {
      // code...
      this.logos = logos;
      this.mediaQuery = mediaQuery;
      this.targetMedia = targetMedia
    }

    append(targetContainer: HTMLCollection, customClass?:string) {
      let targetMedia = this.targetMedia;
      let mediaQuery = this.mediaQuery;
      let checkMobile = (target:Element):void => {
        if (targetMedia == 'mobile' && mediaQuery == 'mobile') { // If media query matches
          c.log('mobile')
          //mobile
          if(targetContainer.length > 0) {
            targetContainer[0].classList.add('t4u-custom-container-mobile');
            targetContainer[0].insertBefore(target, targetContainer[0].childNodes[0]);
          }
          
        } else if(targetMedia == 'desktop or tablet' && mediaQuery == 'desktop or tablet') {
          c.log('desktop or tablet')
          //desktop
          if(targetContainer.length > 0) {
            targetContainer[0].classList.add('t4u-custom-container');
            targetContainer[0].appendChild(target);
          }
        }
      }

      /*add custom class*/ 
      if(targetContainer.length > 0) {
        
        if(customClass == "custom-flex") {
          targetContainer[0].classList.add(customClass);
        }else if(customClass == "custom-white") {
          targetContainer[0].classList.add(customClass);
        }

        //only the last logo: often there where 2
        for (var i = 0; i < logos.length; i++) {
          if(i == (logos.length - 1)) {
            checkMobile(logos[i]); // Call listener function at run time
          }
        }
      }
    }
  }

  let mobileAllPage = new PaymentIcon(logos, 'mobile', mediaQuery);
  mobileAllPage.append(mobileTargetContainerPersonalInfoAndAbove);

  let desktopShoppingBag = new PaymentIcon(logos, 'desktop or tablet', mediaQuery);
  desktopShoppingBag.append(desktopTargetContainerShoppingBag, 'custom-flex');

  let desktopWelcome = new PaymentIcon(logos, 'desktop or tablet', mediaQuery);
  desktopWelcome.append(desktopTargetContainerWelcome);

  let desktopPersonalInfo = new PaymentIcon(logos, 'desktop or tablet', mediaQuery);
  desktopPersonalInfo.append(desktopTargetContainerPersonalInfoAndAbove, 'custom-white');

  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}