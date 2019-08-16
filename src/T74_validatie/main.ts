
import {Develop} from "./develop"

import {TryAndCatch} from "./tryAndCatch"
import {CustomLog} from "./log"
import {Style} from "./style"
/*import {CustomEventEmitter} from "./customEventEmitter"
import {FindThatClassFirst} from "./findThatClassFirst"
import {Debounce} from "./debounce"

import {Cookie} from "./cookie"
import {Language} from "./languages"
import {Country} from "./country"
import {Style} from "./style"
import {MediaQuery} from "./mediaQuery"
import {CustomLog} from "./log"
import {NodeListExist} from "./nodeListExist"*/

/*
==============================
BEGIN CUSTOM CODE | DYNAMIC
dont forget to set DEVELOP to FALSE for production!!
==============================
*/

@Develop({
    isDevelop: false,
    testId:  'T74_validatie',
    urlReplaced: 'https://www.freo.nl/Scripts/FreoWebsite/polyfills.js?v=4.51.0.20905'
})
@Style(`
    .t4u-icon {
        display: none;
        position: relative;
        top: 2px;
    }
    `)
@CustomLog
class Base {
    //STANDARD PROPERTY
    log : Function; // CUSTOM LOG()
    mediaQuery : Function; // DETECT IF ON MOBILE OR NAH: JS-MEDIA QUERY
    language : Function; // DETECT LANGUAGE
    country : Function; // DETECT COUNTRY
    cookieCheck : Function; // DETECT IF THE COOKIE-VALUE

    //PUT HERE UR NODELIST - SELECTOR
    labelWraper: NodeList
    //PUT OTHERS HERE
    
    constructor() {
        // code...
        this.labelWraper = document.querySelectorAll('.label-wrapper');
    }
    @TryAndCatch
    insertIcon(targetIcon:string) {
        for (var i = 0; i < this.labelWraper.length; i++) {

            // if there is js-popover and there is help-text
            if((<HTMLElement>this.labelWraper[i]).querySelectorAll('.js-popover').length > 0 && (<HTMLElement>this.labelWraper[i]).querySelectorAll('.help-text').length > 0) {
                (<HTMLElement>this.labelWraper[i]).querySelector('.js-popover').insertAdjacentHTML('afterend', targetIcon);
                (<HTMLElement>this.labelWraper[i]).querySelector('label').style.display = 'inline-block';
            }

            // if there is js-popover but no help-text
            if((<HTMLElement>this.labelWraper[i]).querySelectorAll('.js-popover').length > 0 && (<HTMLElement>this.labelWraper[i]).querySelectorAll('.help-text').length == 0) {
                (<HTMLElement>this.labelWraper[i]).querySelector('.js-popover').insertAdjacentHTML('afterend', targetIcon);
            }

            // if there is no .js-popover and .help-text
            if((<HTMLElement>this.labelWraper[i]).querySelectorAll('.js-popover').length == 0 && (<HTMLElement>this.labelWraper[i]).querySelectorAll('.help-text').length == 0) {
                (<HTMLElement>this.labelWraper[i]).querySelector('label').insertAdjacentHTML('afterend', targetIcon);
                (<HTMLElement>this.labelWraper[i]).querySelector('label').style.display = 'inline-block';
                (<any>this.labelWraper[i]).querySelector('.t4u-icon').style.left = '5px';
            }

            // if there is help-text but no js-pophover
            if((<HTMLElement>this.labelWraper[i]).querySelectorAll('.js-popover').length == 0 && (<HTMLElement>this.labelWraper[i]).querySelectorAll('.help-text').length > 0) {
                (<HTMLElement>this.labelWraper[i]).querySelector('label').insertAdjacentHTML('afterend', targetIcon);
                (<HTMLElement>this.labelWraper[i]).querySelector('label').style.display = 'inline-block';
                (<any>this.labelWraper[i]).querySelector('.t4u-icon').style.left = '5px';
            }
        }
    }
    @TryAndCatch
    validation() {
        let _this = this;
        for (var i = 0; i < _this.labelWraper.length; i++) {
            let fieldWrapper = (<HTMLElement>_this.labelWraper[i]).nextElementSibling;

            //wil active on select
            if(fieldWrapper.querySelectorAll('select').length > 0) {
                fieldWrapper.querySelector('select').addEventListener('focusout', (event) => {

                   setTimeout(function(){ 
                        if((<any>event.target).closest(".form-row").classList.contains('is-valid') ) {
                            (<any>event.target).closest(".form-row").querySelector('.t4u-icon').style.display = 'inline-block';

                        }else if((<any>event.target).closest(".form-row").classList.contains('has-error')) {
                            (<any>event.target).closest(".form-row").querySelector('.t4u-icon').style.display = 'none';
                        }
                    }, 300);
                });
            }
            // will active on input
            for (var j = 0; j < fieldWrapper.querySelectorAll('input').length; j++) {

                 //only active on type text and email
                if(fieldWrapper.querySelectorAll('input')[j].getAttribute("type") == 'text' ||
                   fieldWrapper.querySelectorAll('input')[j].getAttribute("type") == 'email') {

                    //panrent who has class .is-valid
                    fieldWrapper.querySelectorAll('input')[j].addEventListener('focusout', (event) => {
                
                        setTimeout(function(){ 
                             if((<any>event.target).closest(".form-row").classList.contains('is-valid') ) {
                                (<any>event.target).closest(".form-row").querySelector('.t4u-icon').style.display = 'inline-block';

                            }else if((<any>event.target).closest(".form-row").classList.contains('has-error')) {
                                (<any>event.target).closest(".form-row").querySelector('.t4u-icon').style.display = 'none';
                            }
                        }, 300);
                    });
                }
            }

            // will active on radio button
            if(fieldWrapper.querySelectorAll('.radio-wrapper').length > 0) {
                let radioWrapper = fieldWrapper.querySelectorAll('.radio-wrapper')[0];

                radioWrapper.addEventListener('click', function(e) {

                    if( (<any>e.target).parentNode.parentNode.parentNode.parentNode.getAttribute("name") == "fieldset-leendoel" || 
                        (<any>e.target).parentNode.parentNode.parentNode.parentNode.getAttribute("data-condition") == "IncomeType=='EMPLOYMENT'" ||
                        (<any>e.target).parentNode.parentNode.parentNode.parentNode.getAttribute("data-condition") == "IncomeType=='CONTRACT_BASED'" ||
                        (<any>e.target).parentNode.parentNode.parentNode.parentNode.getAttribute("data-condition") == "IncomeType=='SOCIAL_SECURITY'" ||
                        (<any>e.target).parentNode.parentNode.parentNode.parentNode.getAttribute("data-condition") == "IncomeType=='SELF_EMPLOYED'" ||
                        (<any>e.target).parentNode.parentNode.parentNode.parentNode.getAttribute("data-condition") == "PartnerIncomeType=='EMPLOYMENT'" ||
                        (<any>e.target).parentNode.parentNode.parentNode.parentNode.getAttribute("data-condition") == "PartnerIncomeType=='CONTRACT_BASED'" ||
                        (<any>e.target).parentNode.parentNode.parentNode.parentNode.getAttribute("data-condition") == "PartnerIncomeType=='SOCIAL_SECURITY'" ||
                        (<any>e.target).parentNode.parentNode.parentNode.parentNode.getAttribute("data-condition") == "PartnerIncomeType=='SELF_EMPLOYED'") {
                       
                        (<any>e.target).parentNode.parentNode.parentNode.parentNode.querySelector('.t4u-icon').style.display = 'inline-block';
                    }

                    if((<any>e.target).parentNode.parentNode.parentNode.parentNode.getAttribute("name") == "fieldset-details" || 
                        (<any>e.target).parentNode.parentNode.parentNode.parentNode.getAttribute("name") == "fieldset-address" ||
                        (<any>e.target).parentNode.parentNode.parentNode.parentNode.getAttribute("name") == "fieldset-details-partner") {

                        (<any>e.target).parentNode.parentNode.parentNode.querySelector('.t4u-icon').style.display = 'inline-block';
                    }

                });
            }
        }
    }
    @TryAndCatch
    poplyfilClosestIE() {
        if (!Element.prototype.matches) {
            Element.prototype.matches = (<any>Element).prototype.msMatchesSelector || (<any>Element).prototype.webkitMatchesSelector;
        }

        if (!Element.prototype.closest) {
            Element.prototype.closest = function(s) {
            var el = this;

            do {
              if (el.matches(s)) return el;
              el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
          };
        }
    }
}

class V1 extends Base {
    iconONe: string;
    constructor() {
        // code...
        super();

        this.iconONe = `<span class="t4u-icon">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve">
            <circle fill="#47B844" cx="8" cy="8" r="8"/>
            <polygon fill="#FFFFFF" points="11.449,4 6.482,8.965 4.552,7.036 3.035,8.553 6.482,12 12.965,5.518 "/>
        </svg></span>`;
    }
     @TryAndCatch
    cunstomCode() {
        this.poplyfilClosestIE();
        this.insertIcon(this.iconONe);
        this.validation();

   }
}

class V2 extends Base {
    iconONe: string;
    constructor() {
        // code...
        super();

        this.iconONe = `<span class="t4u-icon">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="16px" height="16px" viewBox="0 0 16 16" enable-background="new 0 0 16 16" xml:space="preserve">
        <polygon fill="#47B844" points="13.607,1.989 5.773,9.82 2.728,6.776 0.334,9.17 5.773,14.609 16,4.383 "/>
        </svg>`;
    }
    @TryAndCatch
    cunstomCode() {
        this.poplyfilClosestIE();
        this.insertIcon(this.iconONe);
        this.validation();
   }
}
/*
==============================
VARIATION 1 / 2 / 3 / 4 | INIT
==============================
*/

let variation:any = new V2();
    variation.cunstomCode();

/*
==============================
END CUSTOM CODE
==============================
*/