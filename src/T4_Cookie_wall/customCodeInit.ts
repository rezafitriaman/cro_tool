

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
    testId:  'T4_Cookie_wall',
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

  //detect media query: if mobile or not
  let media = new CheckMobileOrDesktop('768px');
  let mediaQuery = media.match();

  /*
  ==============================
  BEGIN CUSTOM CODE | DYNAMIC
  ==============================
  */
  

  class cookieWall {
    cookieHTML : string;
    country:string;
    addClass: Function;
    targetDelete:string;

    constructor(_targetDelete: string = '#dialogsContainer') {
     // code...
      this.country = l[0] + co[0].split('_')[1];
      this.cookieHTML = `
      <div class="custom-t4u-cookie cookieNoticeWrapper js-cookieNotice">
        <p class="cookieNotice">
            <span class="cookieNotice-message cookieNotice-message--info">We use <a href="/${this.country}/cookie-statement">cookies</a>.</span>
            <span class="cookieNotice-message cookieNotice-message--warning">Cookies are blocked or not supported by your browser. You must <a href="http://www.google.com/cookies.html">enable cookies</a> to use this website.</span>
            <a class="t4u-custom-x cookieNotice-closeButton js-cookieNotice-closeButton gstar-icon icon-close"></a>
        </p>
      </div>`;
      this.addClass = function() {
        document.getElementsByClassName('custom-t4u-cookie')[0].classList.add('has-cookiesEnabled');
        document.getElementsByClassName('custom-t4u-cookie')[0].classList.add('is-visible');
      }
      this.targetDelete = _targetDelete;
     
    }
    append(target:string) {
      let elm_target = document.getElementsByClassName(target)[0];
      //insert the small cookie
      elm_target.insertAdjacentHTML('afterend', this.cookieHTML);
      //emedietly delete the cookie wall with display none
      this.delete(this.targetDelete);
    }
    save() {
      let button:HTMLCollection = document.getElementsByClassName('t4u-custom-x');
      let showCookie: boolean = true;
      let showCookieData: boolean = sessionStorage.getItem('showCookie') ? JSON.parse( sessionStorage.getItem('showCookie')) : sessionStorage.setItem('showCookie', JSON.stringify(showCookie));

      if(showCookieData) {
        c.log('yes then append');

        this.addClass();

      }else if(showCookieData == false) {
        c.log('no then append nothing');
        return;
      }else {
        c.log('undefined then append cookie')
        this.addClass();
      }

      button[0].addEventListener('click', function() {
        showCookie = false;
        this.closest('.custom-t4u-cookie').classList.remove('is-visible');
        sessionStorage.setItem('showCookie', JSON.stringify(showCookie));
      });
    }
    delete(target:string) {

      var simulateClick = function (elem:any) {
        // Create our event (with options)
        var evt = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        });
        // If cancelled, don't dispatch our event
        var canceled = !elem.dispatchEvent(evt);
      };

      let int = setInterval(function() {
        if(document.querySelector(target) != null) { 
          if(document.querySelector(target).getElementsByClassName('js-cookieAccept').length > 0) {
            c.log(document.querySelector(target).getElementsByClassName('js-cookieAccept'));
            clearInterval(int);

            simulateClick(document.querySelector(target).getElementsByClassName('js-cookieAccept')[0]);
          }
        } 
      }, 300);
    }
  }

  let wall = new cookieWall();

  wall.append('footer');
  wall.save();


  /*
  ==============================
  END CUSTOM CODE
  ==============================
  */
}